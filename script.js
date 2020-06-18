// Assignment Code
var generateBtn = document.querySelector("#generate");

//added in prompt to ask user for length
var response = prompt("Please choose a password length between 8 and 128 characters");

//add in prompt for password that is "response" length with at lease 1 uppercase, 1 lowercase , 
//and 1 special character in password
response = prompt("Please enter a password of " + response + " length, with at least 1 Uppercase, 1 lowercase and 1 special character");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
