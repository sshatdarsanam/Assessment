var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'bu379@ESHIU';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
 
var sra = encrypt("Sravani Shatdarsanam")

//output is the name given
console.log(encrypt(sra));
console.log(decrypt(sra));