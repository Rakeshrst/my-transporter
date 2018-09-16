

const database = require('../database.js');
const md5 = require('md5');


exports.loginUser = async (req, res, next) => {

   
        const result = await database.simpleExecute(`select password from wd_user where user_id = :id`,['tcsuser']);
        const user = result.rows[0].PASSWORD;
        const userPassword=req.userPassword;

        console.log(md5(userPassword));
        res.end(`DB user: ${user}`);

        console.log(`DB user: ${user}`);    
        
  };