// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  // Variable that holds the generated password

  // Variables that holds password criteria characters

  // Variable that holds characters that the user chose

  // Conditionals to check if the user selected certain criteria

  // Password generator
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
