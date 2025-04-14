import { capitalize } from '../src/half.js';

if (capitalize('hello') !== 'Hello') {
    throw new Error('Incorrect answer');
}

console.log('All correct');