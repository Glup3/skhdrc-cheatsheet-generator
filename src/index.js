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

      const command = trimmedLine.split(':');
      const commandArgs = command[0].trim().split('-');
      const commandKey = commandArgs[1].trim();
      const commandKeyModified = commandKey.startsWith('0x') ? commandKey : commandKey.toUpperCase();

      markdown +=
        '| ' + commandArgs[0].toUpperCase() + ' + ' + commandKeyModified + ' | ' + `\`${command[1].trim()}\` |\n`;
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
