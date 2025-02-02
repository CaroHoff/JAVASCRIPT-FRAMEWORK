const fs = require('fs');

// Using non-blocking fs.readFile to read the file
fs.readFile('fruits.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    // Using console.log to print the output in the terminal
    console.log('File content:');
    console.log(data);
});