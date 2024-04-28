const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const MarkdownIt = require('markdown-it');
const mdi = new MarkdownIt();

const directoryPath = path.join(__dirname, 'content/english/__low');

// Helper function to format date to "YYYY/Month"
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    return `${year}/${month.toLowerCase()}`;
}

// Function to extract and update YAML front matter from Markdown content
function updateFrontMatter(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${filePath}:`, err);
            return;
        }

        // Split the content on the front matter delimiters
        const contentParts = data.split('---');
        if (contentParts.length < 3) {
            console.error(`No front matter found in ${filePath}`);
            return;
        }

        // Parse the YAML front matter
        let frontMatter;
        try {
            frontMatter = yaml.load(contentParts[1]);
        } catch (error) {
            console.error(`Error parsing YAML front matter in ${filePath}:`, error);
            return;
        }

        // Check if date exists and update 'yearmonths'
        if (frontMatter && frontMatter.date) {
            frontMatter.yearmonths = formatDate(frontMatter.date);

            // Serialize the updated front matter back to YAML
            const yamlUpdated = yaml.dump(frontMatter, { lineWidth: -1 });

            // Reassemble the full content with updated front matter
            let updatedContent = `---\n${yamlUpdated}---\n${contentParts.slice(2).join('---')}`;

            // Replace "| Data Breach Report------------:" with "| Data Breach Report\n------------:"
            updatedContent = updatedContent.replace('| Data Breach Report------------:', '| Data Breach Report\n------------:');

            // Write the updated content back to the file
            fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
                if (err) {
                    console.error(`Error writing updated content to ${filePath}:`, err);
                    return;
                }
                console.log(`Successfully updated ${filePath}`);
            });
        } else {
            console.error(`No date found in front matter of ${filePath}`);
        }
    });
}


// Process all markdown files in the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.endsWith('.md') && file !== '_index.md') {
            updateFrontMatter(path.join(directoryPath, file));
        }
    });
});
