//length validation function
function lengthValidation(x) {

  // If length is Not a Number or less than 8 or greater than 128
  if (isNaN(x) || x < 8 || x > 128) {
    alert("Input not valid, please try again");
   // location.reload();
  } 
  else {
    //do nothing proceed
  }
}

// Assignment Code finds button in css and returns it into var generateBtn
var generateBtn = document.querySelector("#generate");

//added in prompt to ask user for length
var length = prompt("Please choose a password length between 8 and 128 characters");

//call length function to validate length of string 
lengthValidation(length);

//add in prompt for password that is "response" length with at lease 1 uppercase, 1 lowercase , 
alert("you must select at least 1 character type uppercase, lowercase, and special characters in order to be a valid password.");
//ask user if they want to use uppercase character type
var uppercase = confirm("Do you want to include UPPERCASE characters?");

//ask user if they want to use lowercase characters
var lowercase = confirm("Do you want to include lowercase characters?");

var specialCharacter = confirm("Do you want to include special characters?")


//validate the users character selections to include at least 1 of the 3 character types


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
