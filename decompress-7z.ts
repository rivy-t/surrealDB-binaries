// Import the xz-decompress module from npm
import decompress from 'npm:7zip-min@2.0.0';

const output = await decompress.unpack('./surreal-windows-amd64.7z', '.');
console.log(output);

console.log('File extracted and saved successfully.');
