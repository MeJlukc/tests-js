import { capitalize } from '../src/half.js';
import { strict as assert, deepEqual} from 'node:assert'

// if (capitalize('hello') !== 'Hello') {
//     throw new Error('Incorrect answer');
// }

assert.equal(capitalize('hello'), 'Hello');
assert.deepEqual(capitalize(''), '');
// deepEqual нужен для глубокой проверки (не по ссылке), например для объектов
// assert.deepEqual(capitalize({}), {}) / passed;

console.log('All correct');