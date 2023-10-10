// Assignment code here

// getting length of the password to be generated

function generatePassword(){
var password= []
var UsedCharacters=[]
var length = prompt("How long should the password be?")
var length = String(length)
if (length < 8) alert("below minumum length. (8)") 
if (length > 128) alert("Above maximum length. (128)")
// characters confirmation section
if (confirm("Use special characters? Ok for yes, Cancel for no.") == true){
  var UsedCharacters = UsedCharacters + ["!@#$%^&*()"]
} else {
  console.log("special characters disabled.")
}
if (confirm("Use numbers? Ok for yes, Cancel for no.") == true){
  var UsedCharacters = UsedCharacters + ["123456789"]
} else {
  console.log("numbers disabled.")
}
if (confirm("Use capital letters? Ok for yes, Cancel for no.") == true){
  var UsedCharacters = UsedCharacters + ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
} else {
  console.log("capital letters disabled.")
}
if (confirm("Use lowercase letters? Ok for yes, Cancel for no.") == true){
  var UsedCharacters = UsedCharacters + ["abcdefghijklmnopqrstuvwxyz"]
} else {
  console.log("lowercase letters disabled.")
}
// checking if UsedCharacters is empty.
if (UsedCharacters.length == 0){
  return "Please select atleast one character type and try again!"
}
// generation section
    for (i = 0; i != length; i++){
    holdover = UsedCharacters[Math.floor(Math.random() * UsedCharacters.length)]
    password = password + holdover
    }
    console.log(UsedCharacters)
    return password
  }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(x) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
