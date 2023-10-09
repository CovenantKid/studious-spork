// Assignment code here

// getting length of the password to be generated
function generatePassword(){
var characters=[]
var length = prompt("How long should the password be?")
var length = Number(length)
if (length < 8) alert("below minumum length. (8)") 
if (length > 128) alert("Above maximum length. (128)")
// Special characters section
  var SpecChars =confirm("Allow special characters? Ok for yes, Cancel for no.")
  if (SpecChars = true) (SpecChars = ["!","@","#","$","%","^","&","*"])
// generation section
    test = SpecChars[Math.floor(Math.random()*SpecChars.length)];
    console.log (test)





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
