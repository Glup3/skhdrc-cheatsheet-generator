const { readFileSync, writeFileSync } = require('fs');

module.exports = function () {
  const cwd = process.cwd();

  try {
    const content = readFileSync(cwd + '/skhdrc', { encoding: 'utf-8' }).split('\n');
    let lookingForKeycodes = true;
    let markdown = '# skhd Generated Shortcut Cheatsheet\n\n';

    markdown += '## Keycodes\n\n';

    for (const line of content) {
      const trimmedLine = line.trim();

      if (trimmedLine.length === 0) {
        continue;
      }

      if (lookingForKeycodes) {
        if (trimmedLine.startsWith('#k')) {
          markdown += '- ' + trimmedLine.substring(3) + '\n';
          continue;
        }
      }

      if (trimmedLine.startsWith('##')) {
        markdown += '\n' + trimmedLine + '\n\n';
        markdown += '| Shortcut | Command |\n';
        markdown += '| -------- | ------- |\n';
        continue;
      }

      if (trimmedLine.startsWith('#')) {
        continue;
      }

      if (lookingForKeycodes) {
        lookingForKeycodes = false;
      }

      const commandParts = trimmedLine.split(':');
      const commandArgs = commandParts[0].trim().split('-');
      const commandKeyRaw = commandArgs[1].trim();
      const commandKey = commandKeyRaw.startsWith('0x') ? commandKeyRaw : commandKeyRaw.toUpperCase();
      const command = commandParts[1].trim().replace(/\|/g, '\\|');

      markdown += '| ' + commandArgs[0].trim().toUpperCase() + ' + ' + commandKey + ' | ' + `\`${command}\` |\n`;
    }

    writeFileSync(cwd + '/skhdrc-cheatsheet.md', markdown, {
      encoding: 'utf-8',
    });

    console.log('Successfully generated markdown cheatsheet!');
  } catch (e) {
    if (e.syscall == 'open') {
      console.error(`ERROR: Couldn't locate skhdrc file at "${cwd}"`);
    } else {
      console.error(e);
    }
  }
};
