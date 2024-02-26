const { scryptSync, randomBytes } = require('crypto');
const { buffer } = require('stream/consumers');

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedpassword = scryptSync(password, salt, 64);

    const user = { email, password: `${salt}:${hashedpassword}` }
    users.push(user);
    return user
}

function login(email, password) {
    const user = users.find(v => v.email === email);

    cont[salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.form(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return 'login success!'
    } else {
        return 'login failed!'
    }

}