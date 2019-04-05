var fs = require("fs");
const crypto = require("crypto");
const eccrypto = require ("eccrypto");

var str = "SravaniShatdarsanam";

var publicKey = eccrypto.generatePublic(privateKey);

var privateKey = eccrypto.generatePrivate();

var msg = crypto.createHash("sha256","utf-8").update(str).digest();

eccrypto.sign(privateKey, msg).then(function(sig) {
    console.log("Signature:", sig);
    
    eccrypto.verify(publicKey, msg, sig).then(function() {
      console.log("Signature is OK");
    }).catch(function() {
      console.log("Signature is BAD");
    });
  });



