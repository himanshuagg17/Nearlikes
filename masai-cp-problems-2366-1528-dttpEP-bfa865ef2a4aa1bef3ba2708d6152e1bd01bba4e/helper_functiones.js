// import all modules require
const { error } = require("console");
const dns=require("dns");


// complete the functions.

function getIP(website_name) {
  dns.resolve4(website_name,(error,address)=>{
    if(error){
        console.log("Websitename or Url is invalid.");
    }
    else{
        console.log(`IP address is ${address.join(',')}`);
    }
  })

}

function writeToFile(filename, content) {

  
}

function readAFile(filename) {
  
}

function deleteAFile(filename) {
 
}

function makeCowSay(content) {
  
}

// exports all functions

module.exports={
    getIP
}