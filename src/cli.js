#!/usr/bin/env node

const program = require('commander');
const generate = require('./index');

program
  .command('generate')
  .alias('gen')
  .action(() => {
    generate();
  });

program.parse(process.argv);
