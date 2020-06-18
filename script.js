var lengthValid = false;

//length validation function
function lengthValidation(x) {

  // If length is Not a Number or less than 8 or greater than 128
  if (isNaN(x) || x < 8 || x > 128) {
    alert("Input not valid, please try again");
    
  } 
  else {
    lengthValid = true;
    //do nothing proceed
  }
}

// Assignment Code finds button in css and returns it into var generateBtn
var generateBtn = document.querySelector("#generate");

//added in prompt to ask user for length
var length = prompt("Please choose a password length between 8 and 128 characters");

//call length function to validate length of string 
lengthValidation(length);

if(lengthValid === true) {

  //add in prompt for password that is "response" length with at lease 1 uppercase, 1 lowercase , 
  alert("you must select at least 1 character type uppercase, lowercase, and special characters in order to be a valid password.");
  
  //ask user if they want to use uppercase character type
  var uppercase = confirm("Do you want to include UPPERCASE characters?");

  //ask user if they want to use lowercase characters
  var lowercase = confirm("Do you want to include lowercase characters?");

  //ask if they want special characters
  var specialCharacter = confirm("Do you want to include special characters?")

  //ask if they want number characters
  var numberCharacter = confirm("Do you want to include special characters?")

  //validate at least 1  type of character is present that user specified
  //CODE HERE//

  function generatePassword(upercase,lowercase,specialCharacter,numbers);
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Q","Y","Z"];  
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","q","y","z"];
    var special = ["!","@","#","$","%","^","&","*","(",")","_","+"];
    var numbers = ["1","2","3","4","5","6","7","8","9"];
    var count = 0;  
    var final = [];
    var x;

    //for loop of user specified length
    for (var i = 0;i<length;i++){

        //for loop that iterates through all cases 
        for (var j = 0;j<length;j++){

          if (uppercase === true) {
            //take a random index from upperCase[]
            x = Math.floor((Math.random() * upperCase.length));
            final.push(upperCase[x]);
          }

          if (lowerCase === true) {
            //take a random index from lowerCase
            x = Math.floor((Math.random() * lowerCase.length));
            final.push(lowerCase[x]);
          }

          if (special === true) {
            //take a random index from lowerCase
            x = Math.floor((Math.random() * special.length));
            final.push(special[x]);
          }
          
          if (numbers === true) {
            //take a random index from lowerCase
            x = Math.floor((Math.random() * numbers.length));
            final.push(numbers[x]);
          }
        }
    }
   


    

  // Write password to the password box
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
   
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

}