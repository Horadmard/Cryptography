const {createSign, createVerify} = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'can we have a date?';

/// Sign

const signer = createSign('rsa-sha256').update(message);

const signature = signer.sign(privateKey, 'hex');

/// Verify

const Verifier = createVerify('rsa-sha256').update(message);
const isVeryfied = Verifier.verify(publicKey, signature, 'hex');