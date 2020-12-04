// Array of special characters to be included in password
var specialCh = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCh = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCh = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCh = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordOptions(){
  var length = parseInt(prompt("What is your password length?"));
    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (isNaN(length) === true) {
      alert('Password length must be provided as a number');
      return;
    }
  
    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if (length < 8) {
      alert('Password length must be at least 8 characters');
      return;
    }
  
    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    if (length > 128) {
      alert('Password length must less than 129 characters');
      return;
    }
  var upperCh = confirm("Do you want upper?");
  var specialCh = confirm("Do you want special Ch ?");
  var numericCh = confirm("Do you want numbers?");
  var lowerCh = confirm("Do you want lower?");
    // Conditional statement to must pick something
    if(upperCh===false && specialCh===false && numericCh===false && lowerCh===false){
      alert('Must select at least one character type');
      return;
    }

  // Object to store user input
  var passwordOptions = {
    length: length,
    upperCh: upperCh,
    specialCh: specialCh,
    numericCh: numericCh,
    lowerCh: lowerCh
  };

  return passwordOptions;

}

function getRandom(arr) {
  var ranIndex = Math.floor(Math.random() * arr.length);
  var randomPick = arr[ranIndex];

  return randomPick
};

function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.upperCh) {
    possibleCharacters = possibleCharacters.concat(upperCh);
    guaranteedCharacters.push(getRandom(upperCh));
  }
  if (options.specialCh) {
    possibleCharacters = possibleCharacters.concat(specialCh);
    guaranteedCharacters.push(getRandom(specialCh));
  }
  if (options.numericCh) {
    possibleCharacters = possibleCharacters.concat(numericCh);
    guaranteedCharacters.push(getRandom(numericCh));
  }
  if (options.lowerCh) {
    possibleCharacters = possibleCharacters.concat(lowerCh);
    guaranteedCharacters.push(getRandom(lowerCh));
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }
  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
