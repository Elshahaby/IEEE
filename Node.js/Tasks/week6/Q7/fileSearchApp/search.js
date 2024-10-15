#!/usr/bin/env node

const fs = require('fs');
const  {Command}  = require('commander');

const program = new Command();

program
    .version('1.0.0')
    .description('CLI File Search Application')
    .requiredOption('-f, --file <filename>', 'Name of the file to search')
    .requiredOption('-q, --query <query>', 'Query string to search for in the file')
    .parse(process.args);

    
const { file, query } = program.opts();


fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading the file: ${err.message}`);
        return;
    }

    const lines = data.split('\n');
    let found = false;

    lines.forEach((line, index) => {
        if (line.includes(query)) {
            console.log(`Line ${index + 1}: ${line}`);
            found = true;
        }
    });

    if (!found) {
        console.log("THAT'S NOT FUNNY");
    }
});
