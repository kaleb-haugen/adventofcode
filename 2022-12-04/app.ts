// Import values as string
import path from 'path';
import fs from 'fs';

const text = fs.readFileSync(path.join(__dirname, './inputs.txt'), 'utf-8');

console.log(text)