const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

const massage = 'i love you ♥';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv)

/// Encrypt

const encryptrdMassage = cipher.update(massage, 'utf8', 'hex') + cipher.final('hex');
// console.log(encryptrdMassage);

/// Decrypt

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMassage = decipher.update(encryptrdMassage, 'hex', 'utf8') + decipher.final('utf8');

console.log(massage + ' -> ' + encryptrdMassage + ' -> ' + decryptedMassage);
