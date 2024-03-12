const client = require('../database/supabase.js')
const jwt = require("jsonwebtoken");
require('dotenv').config();

async function signin(email, password) {
    const data =await client.from('student').select('*').eq('')
}

function signout() {
    return
}

signin('henryhoangduong@gmail.com', 'password');

module.exports= {signin, signout}

