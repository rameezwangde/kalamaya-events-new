require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const pathsToUpload = [
    { localPath: 'photos fulll set/future', cloudFolder: 'kalamaya_events_photos/future' },
    { localPath: 'photos fulll set/SET 2/lulu 10 YEAR', cloudFolder: 'kalamaya_events_photos/SET 2/lulu 10 YEAR' },
    { localPath: 'photos fulll set/voltas/New folder', cloudFolder: 'kalamaya_events_photos/voltas/New folder' }
];

async function uploadMissing() {
    for (const item of pathsToUpload) {
        const fullLocalPath = path.join(__dirname, item.localPath);
        if (fs.existsSync(fullLocalPath)) {
            const files = fs.readdirSync(fullLocalPath);
            console.log(`\n--- Processing: ${item.localPath} (${files.length} files) ---`);
            for (const file of files) {
                const filePath = path.join(fullLocalPath, file);
                if (fs.statSync(filePath).isFile()) {
                    try {
                        console.log(`Uploading: ${file}...`);
                        await cloudinary.uploader.upload(filePath, {
                            folder: item.cloudFolder,
                            use_filename: true,
                            unique_filename: false,
                            resource_type: "auto"
                        });
                        console.log(`✅ Success: ${file}`);
                    } catch (err) {
                        console.error(`❌ Failed to upload ${file}:`, err.message);
                    }
                }
            }
        } else {
            console.log(`Path not found: ${fullLocalPath}`);
        }
    }
    console.log("\n🎉 All missing folders uploaded successfully!");
}

uploadMissing();
