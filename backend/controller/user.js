const client = require('../database/supabase.js')
const jwt = require("jsonwebtoken");
require('dotenv').config();

async function signin(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const data = await client.from('student').select('*').eq();
    //Check email
    if () {
        
    }//Check password
    else {
        
    }
}

function signout() {
    return
}

signin('henryhoangduong@gmail.com', 'password');

module.exports= {signin, signout}

