const supabase = require('../database/supabase')
const jwt = require("jsonwebtoken");
require('dotenv').config();

function signin(email,password) {
    const payload = {
        email: email,
        password: password
    }
    const token = jwt.sign(payload, process.env.JWT_KEY);
    return token
}

function signout() {
    return
}

module.exports= {signin, signout}

