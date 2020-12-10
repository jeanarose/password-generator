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
  var numericCharacters = "0123456789";
  var specialCharacters = "!@#$%^&*()";

  // Variable that holds characters that the user chose
  var chosenCriteria = ""

  // Prompts/confirms to ask user how long they want their password to be 
  // and what characters they want to include.
  var passwordLength = prompt("How many characters do you want your password to be?");

  // Conditional to check that the password length is between 8 and 128
  if(passwordLength < 8 || passwordLength > 128){
    alert("Please enter a password length between 8 and 128.");
    return generatePassword();
  }

  var includeLowerCase = confirm("Do you want to include lowercase characters?");
  var includeUpperCase = confirm("Do you want to include uppercase characters?");
  var includeNumbers = confirm("Do you want to include numbers in your password?");
  var includeSpecialCharacters = confirm("Do you want to include special characters in your password?");

  // Conditional to check if the user wants to include lowercase characters
  if(includeLowerCase){
    chosenCriteria = chosenCriteria + lowerCaseCharacters;
    console.log(chosenCriteria);
  }

  // Conditional to check if the user wants to include uppercase characters
  if(includeUpperCase){
    chosenCriteria = chosenCriteria + upperCaseCharacters;
    console.log(chosenCriteria);
  }

  // Conditional to check if the user wants to include numeric characters
  if(includeNumbers){
    chosenCriteria = chosenCriteria + numericCharacters;
    console.log(chosenCriteria);
  }

  // Conditional to check if the user wants to include special characters
  if(includeSpecialCharacters){
    chosenCriteria = chosenCriteria + specialCharacters;
    console.log(chosenCriteria);
  }

  // Password generator
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
