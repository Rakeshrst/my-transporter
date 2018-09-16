const md5 = require('md5');
 
console.log(md5('message'));


function simplevalidator(password,login_attempt_hashed)
var login_attempt_hashed = crypto.createHash('md5').update(password).digest('hex');
if ( login_attempt_hashed === any ) {
  console.log("Logged in");
} else {
    console.log("Failed password");
}