const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetFiles = [
    'belgium.png',
    'finland.png',
    'ireland.png',
    'luxembourg.png',
    'singapore.png',
    'logo-new.png',
    'logo.png',
    'hero-image.png'
];

async function compress() {
    for (const file of targetFiles) {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            try {
                const statsBefore = fs.statSync(filePath);
                console.log(`Compressing ${file} (Size before: ${Math.round(statsBefore.size / 1024)} KB)...`);

                // Resizing extremely large images to a 1200px max width for web use
                const image = sharp(filePath);
                const metadata = await image.metadata();

                if (metadata.width > 1200) {
                    await image
                        .resize(1200)
                        .png({ compressionLevel: 9, palette: true, quality: 70 })
                        .toFile(file + '_tmp');
                } else {
                    await image
                        .png({ compressionLevel: 9, palette: true, quality: 70 })
                        .toFile(file + '_tmp');
                }

                fs.renameSync(file + '_tmp', filePath);
                const statsAfter = fs.statSync(filePath);
                console.log(`Finished ${file} (Size after: ${Math.round(statsAfter.size / 1024)} KB)`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }
    }
}

compress();
