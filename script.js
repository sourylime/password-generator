// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericChars = '0123456789';
var specialChars = '!@#$%^&*()_-+=<>?/[]{}|';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomItem(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function generatePassword() {
  var passwordLength = Math.floor(Math.random() * 5) + 8;
  var passwordCharacters = "";
  passwordCharacters += getRandomItem(lowercaseChars);
  passwordCharacters += getRandomItem(uppercaseChars);
  passwordCharacters += getRandomItem(numericChars);
  passwordCharacters += getRandomItem(specialChars);

  for (var i = 4; i < passwordLength; i++) {
    var charSet = getRandomItem([lowercaseChars, uppercaseChars, numericChars, specialChars]);
    passwordCharacters += getRandomItem(charSet);
  }


  var shuffledPassword = shuffleString(passwordCharacters);
  return shuffledPassword;
}

function shuffleString(str) {
  var array = str.split('');
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
}