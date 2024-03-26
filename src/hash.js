const { createHash, timingSafeEqual } = require('crypto');

function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

let password = 'Hey-papa!';
const hash1 = hash(password);
console.log(hash1);

password = 'Hey-papa!';
const hash2 = hash(password);
console.log(hash2);

console.log(hash1 == hash2 ? 'good password' : 'password does not match');
