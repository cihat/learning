import fs from "node:fs";

const dataStream = fs.createReadStream('data.txt', 'utf-8');
 
dataStream.on('readable', () => {
console.log(dataStream.read());
});

dataStream.on('end', () => console.log('File Read Completed'));
