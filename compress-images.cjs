const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const TARGET_DIR = path.join(__dirname, 'photos fulll set');
const MAX_SIZE = 9.8 * 1024 * 1024; // 9.8 MB to be safe

async function compressImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    
    if (ext === '.arw') {
        console.log(`[SKIPPED] Cannot compress RAW file: ${filePath}`);
        return;
    }

    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        console.log(`[SKIPPED] Unsupported format ${ext}: ${filePath}`);
        return;
    }

    try {
        console.log(`[PROCESSING] ${filePath}`);
        const tempPath = filePath + '.tmp';
        
        // Compress by reducing quality and slightly resizing if very large
        const metadata = await sharp(filePath).metadata();
        let pipeline = sharp(filePath);
        
        // If it's a huge image, resize it max 4000px width/height
        if (metadata.width > 4000 || metadata.height > 4000) {
            pipeline = pipeline.resize({
                width: 4000,
                height: 4000,
                fit: 'inside',
                withoutEnlargement: true
            });
        }
        
        if (ext === '.jpg' || ext === '.jpeg') {
            pipeline = pipeline.jpeg({ quality: 75, mozjpeg: true });
        } else if (ext === '.png') {
            pipeline = pipeline.png({ quality: 75, compressionLevel: 8 });
        } else if (ext === '.webp') {
            pipeline = pipeline.webp({ quality: 75 });
        }

        await pipeline.toFile(tempPath);
        
        // Replace original
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        const newStats = fs.statSync(filePath);
        console.log(`[SUCCESS] Compressed to ${(newStats.size / (1024*1024)).toFixed(2)} MB: ${filePath}`);
        
        if (newStats.size > MAX_SIZE) {
            console.log(`[WARNING] File is still over 10MB after compression: ${filePath}`);
        }
    } catch (error) {
        console.error(`[ERROR] Failed to compress ${filePath}: ${error.message}`);
    }
}

async function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
            await walkDir(fullPath);
        } else if (stats.isFile() && stats.size > MAX_SIZE) {
            await compressImage(fullPath);
        }
    }
}

async function main() {
    console.log(`Scanning for images over 9.8MB in: ${TARGET_DIR}`);
    await walkDir(TARGET_DIR);
    console.log('Finished processing.');
}

main();
