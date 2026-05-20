import fs from 'fs';

const logPath = '/Users/apple/.gemini/antigravity/brain/3af8fd25-b1b5-4a45-9ad6-4b1f1a8d7a20/.system_generated/logs/overview.txt';
const content = fs.readFileSync(logPath, 'utf8');

const lines = content.split('\n');
for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.step_index === 269) {
      console.log('Found step 269!');
      const text = data.content;
      console.log('Length of text:', text.length);
      // Let's search for "faculty" or "organising" inside text
      const idx = text.indexOf('organising committee');
      if (idx !== -1) {
        console.log('Snippet around organizing committee:');
        console.log(text.substring(idx - 200, idx + 1500));
      } else {
        console.log('Did not find string, showing first 1000 chars:');
        console.log(text.substring(0, 1000));
      }
    }
  } catch (e) {
    // Ignore
  }
}
