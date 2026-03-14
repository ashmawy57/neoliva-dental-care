const fs = require('fs');
const path = require('path');

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Simple replacements across attributes. We only want to touch padding on big containers, 
            // but typical tailwind py-20, py-24, py-32 mostly apply to big sections.
            // py-20 without any prefix
            content = content.replace(/(?<![a-z0-9-:])py-20(?!-[0-9])/g, 'py-10 md:py-16 lg:py-20');
            // py-24
            content = content.replace(/(?<![a-z0-9-:])py-24(?!-[0-9])/g, 'py-12 md:py-20 lg:py-24');
            // py-32
            content = content.replace(/(?<![a-z0-9-:])py-32(?!-[0-9])/g, 'py-16 md:py-24 lg:py-32');

            // However, this might create duplicates if we matched "py-20" inside "lg:py-20". I need to be careful with the prefix.
            // A better regex: replace \s+py-20\s+ that aren't preceded by ':'
        }
    });
}
