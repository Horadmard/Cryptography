const { createHash } = require('crypto');

function hash(input){
    return createHash('sha256').update(input).digest('hex');
}