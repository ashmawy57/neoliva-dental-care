const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Regex to find things like py-20, pt-24 etc that are NOT preceded by a breakpoint like md: or lg:
const r = /(?<![a-z0-9-:])\b(p[tbyx]?)-(\d+)\b/g;

// Map original values to new mobile values + desktop. 
// For example, if we see py-20, we turn it to py-10 lg:py-20.
// We'll target big values typically used for section padding: 16, 20, 24, 28, 32, 40 etc.
const scale = {
    '16': '8',
    '20': '10',
    '24': '12',
    '28': '14',
    '32': '16',
    '36': '16',
    '40': '20',
};

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = content.replace(r, (match, prop, value) => {
                if (scale[value]) {
                    // match is like "py-20". Replace with "py-10 lg:py-20"
                    return `${prop}-${scale[value]} lg:${prop}-${value}`;
                }
                return match;
            });
            
            // Fix overlapping replacements if existing desktop values were scaled accidentally
            // meaning someone might have had `py-20 lg:py-32` 
            // the regex `(?<![a-z0-9-:])` prevents `lg:py-32` from matching since `:` is before it.
            // Wait, `:` is not included in negative lookbehind `[a-z0-9-:]`. So `lg:py-32` does NOT match the regex. Good!
            // Wait, what if it was `py-20 md:py-32`? 
            // py-20 matches. It becomes `py-10 lg:py-20`. So `py-10 lg:py-20 md:py-32`. Which is totally fine (order in string doesnt matter in Tailwind).

            if (modified !== content) {
                fs.writeFileSync(fullPath, modified, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

processDir(srcDir);
console.log("Done updating paddings.");
