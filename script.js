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
  var specialCharacters = "!@#$%^&*()'+,-./:<=?][_`{}~";

  // Variable that holds characters that the user chose
  var chosenCriteria = ""

  // Prompt that asks the user how long they want their password to be 
  var passwordLength = prompt("How many characters do you want your password to be?");

  // Conditional to check that the password length is between 8 and 128
  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("Please enter a number between 8 and 128.");
    return generatePassword();
  }

  // Confirms to ask the user what characters they want to include in their password
  var includeLowerCase = confirm("Do you want to include lowercase characters?");
  var includeUpperCase = confirm("Do you want to include uppercase characters?");
  var includeNumbers = confirm("Do you want to include numbers in your password?");
  var includeSpecialCharacters = confirm("Do you want to include special characters in your password?");

  // Conditional to check if the user wants to include lowercase characters
  if(includeLowerCase){
    chosenCriteria = chosenCriteria + lowerCaseCharacters;
  }

  // Conditional to check if the user wants to include uppercase characters
  if(includeUpperCase){
    chosenCriteria = chosenCriteria + upperCaseCharacters;
  }

  // Conditional to check if the user wants to include numeric characters
  if(includeNumbers){
    chosenCriteria = chosenCriteria + numericCharacters;
  }

  // Conditional to check if the user wants to include special characters
  if(includeSpecialCharacters){
    chosenCriteria = chosenCriteria + specialCharacters;
  }

  // Conditional to check that the user selected at least one password criteria
  if(!includeLowerCase &&
    !includeUpperCase &&
    !includeNumbers &&
    !includeSpecialCharacters){
      alert("Oops, you need to choose at least one password criteria!");
      return generatePassword();
    }

  // Password generator
  // Loop that will iterate as long as the password length that the user chose 
  for(var i = 0; i < passwordLength; i++){
    // Variable that picks a random character from the chosenCriteria variable
    var randomCharacter = Math.floor(Math.random() * chosenCriteria.length);
    
    // Adds the random characters to the password
    password = password + chosenCriteria.charAt(randomCharacter)
  }
  // Displays the password on the page
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
