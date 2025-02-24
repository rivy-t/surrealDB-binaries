// Import the xz-decompress module from npm
import decompress from 'npm:xz-decompress@0.2.2';

// // Read the compressed file into a Uint8Array
// const file = await Deno.open('./surreal-windows-amd64.exe.xz', { read: true });
// const compressedDataStream = file.readable;

const response = await fetch(
	'https://cdn.jsdelivr.net/gh/rivy-t/surrealDB-binaries@179460a10d82b52ba4c638be77700c8ba0fbb32c/surreal-windows-amd64.exe.xz',
);
if (!response.body) {
	throw new Error('No response body found');
}
const compressedDataStream = response.body;

// Decompress the data (this returns a Promise<Uint8Array>)
const decompressedData = new decompress.XzReadableStream(compressedDataStream);

// Write the decompressed data to an output file
await Deno.writeFile('./surreal-windows-amd64.decompressed.exe', decompressedData);

console.log('File extracted and saved successfully.');
