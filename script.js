// Assignment Code
var generateBtn = document.querySelector("#generate");

// created arrays containing all possible characters for password
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special =   ["!",'"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}",  "~"];

// created function to prompt user's decisions about password type and if-else statements to ensure all decisions are made
function promptQuestions() {
  var Valid  = false;
  do {
   var length = prompt("Choose password length between 8 and 128 characters");
   var decideNumbers = confirm("Do you want numbers in your password?");
   var decideLowerCase = confirm("Do you want lower case letters in your password?");
   var decideUpperCase = confirm("Do you want upper case letters in your password?");
   var decideSpecial = confirm("Do you want special characters in your password?");
   var responses = {
     length: length,
     decideNumber: decideNumbers,
     decideLowerCase: decideLowerCase,
     decideUpperCase: decideUpperCase,
     decideSpecial: decideSpecial, 
   }
   if((length < 8)||(length > 128)) 
   alert("Choose number between 8 and 128");
   else if((!decideNumbers)&&(!decideLowerCase)&&(!decideUpperCase)&&(!decideSpecial))
   alert("Choose at least one type");
   else
   Valid = true;

  } while(!Valid);
  return responses;
}
// created function to produce acceptable password
function createPassword() {
  var availablePassword = promptQuestions()
  var possibleChoice = [];
  var finalPassword = "";

  if (availablePassword.decideNumbers) {
    for (var r of numbers)
    possibleChoice.push(r);
  }
  if (availablePassword.decideLowerCase) {
    for (var r of lowerCase)
    possibleChoice.push(r);
  }
  if (availablePassword.decideUpperCase) {
    for (var r of upperCase)
    possibleChoice.push(r);
  }
  if (availablePassword.decideSpecial) {
    for (var r of special)
    possibleChoice.push(r);
  }

  console.log(possibleChoice);

  for (var r = 0; r < availablePassword.length; r++) {
    finalPassword += possibleChoice[Math.floor(Math.random() * possibleChoice.length)];

  }
  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
