require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary with credentials from .env
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// The path to your photos folder
const uploadFolder = path.join(__dirname, 'photos fulll set');

async function uploadImages() {
    try {
        // Read all subfolders inside the main folder
        const subfolders = fs.readdirSync(uploadFolder, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        console.log(`Found ${subfolders.length} subfolders to process in 'photos fulll set'.`);

        // Loop through each subfolder
        for (const folder of subfolders) {
            const folderPath = path.join(uploadFolder, folder);
            const files = fs.readdirSync(folderPath);
            
            console.log(`\n--- Processing subfolder: ${folder} (${files.length} files) ---`);

            // Loop through each file in the subfolder
            for (const file of files) {
                const filePath = path.join(folderPath, file);
                
                // Ensure it's a file, not another directory
                if (fs.statSync(filePath).isFile()) {
                    try {
                        console.log(`Uploading: ${file}...`);
                        // Upload to Cloudinary
                        const result = await cloudinary.uploader.upload(filePath, {
                            // This creates a folder structure in your Cloudinary account
                            folder: `kalamaya_events_photos/${folder}`, 
                            use_filename: true,
                            unique_filename: false,
                            resource_type: "auto" // Automatically detect if it's image/video
                        });
                        console.log(`✅ Success: ${file}`);
                    } catch (err) {
                        console.error(`❌ Failed to upload ${file}:`, err.message);
                    }
                }
            }
        }
        console.log("\n🎉 All uploads finished successfully!");
    } catch (error) {
        console.error("Error:", error.message);
        console.error("Make sure the folder 'photos fulll set' is inside the 'kalamaya events' folder!");
    }
}

// Run the script
uploadImages();
