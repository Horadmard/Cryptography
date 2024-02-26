const { createHmac } = require('crypto')
const key = 'super-secret!';
const massage = 'boo!'

const hmac = createHmac('sha256', key).update(massage).digest('hex');

console.log(hmac);

const key2 = 'other-password';
const hmac2 = createHmac('sha256', key2).update(massage).digest('hex');

console.log(hmac2);