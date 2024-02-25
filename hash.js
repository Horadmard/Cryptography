const { createHash } = require('crypto');

function hash(){
    return createHash('sha256');
}