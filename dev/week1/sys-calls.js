const fs = require('fs')
const os = require('os')

fs.readFile('sample.txt','utf8',(err,data) => {
    if (err){
        console.error('Error reading file:',err);
    }else{
        console.log('File contents:',data);
    }
});

const fileName = 'output'
fs.writeFile(`${fileName}.txt`,'Sample data.', (err) => {
    if (err){
        console.error('Error writing file:',err);
    } else {
        console.log(`Data written to ${fileName}.txt`);
    }
});

console.log('Host name:',os.hostname(),'\n  Platform:',os.platform(),'\n  Architecture:',os.arch(), '\n  Available CPU core count:',os.cpus().length);