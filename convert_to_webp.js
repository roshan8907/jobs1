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

async function convertToWebP() {
    for (const file of targetFiles) {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            try {
                const outputName = file.replace('.png', '.webp');
                console.log(`Converting ${file} to WebP...`);

                await sharp(filePath)
                    .resize(1000) // Max width for these UI images
                    .webp({ quality: 60 }) // Good balance for job site
                    .toFile(outputName);

                const statsBefore = fs.statSync(filePath);
                const statsAfter = fs.statSync(outputName);
                console.log(`Success: ${file} (${Math.round(statsBefore.size / 1024)} KB) -> ${outputName} (${Math.round(statsAfter.size / 1024)} KB)`);
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }
}

convertToWebP();
