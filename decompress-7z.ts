// Import the xz-decompress module from npm
import decompress from 'npm:7zip-min@2.0.0';
// import * as decompress from 'https://cdn.jsdelivr.net/npm/7zip-min@2.0.0';
// import * as d2 from 'https://cdn.jsdelivr.net/npm/js7z-tools@2.4.1';
// const x = await d2();

const output = await decompress.unpack('./surreal-windows-amd64.7z', '.');
console.log(output);

console.log('File extracted and saved successfully.');
