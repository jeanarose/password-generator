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
  var password = "";

  // Variables that holds password criteria characters
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersCharacters = "0123456789";
  var specialCharacters = "!@#$%^&*()";

  // Variable that holds characters that the user chose
  var chosenCriteria = ""

  // Prompts/confirms to ask user how long they want their password to be 
  // and what characters they want to include.
  var passwordLength = prompt("How many characters do you want your password to be?");
  var includeLowerCase = confirm("Do you want to include lowercase characters?");
  var includeUpperCase = confirm("Do you want to include uppercase characters?");
  var includeNumbers = confirm("Do you want to include numbers in your password?");
  var includeSpecialCharacters = confirm("Do you want to include special characters in your password?");
  

  // Conditionals to check if the user selected certain criteria
  

  // Password generator
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
