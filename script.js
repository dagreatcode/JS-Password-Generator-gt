// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





// Generate password 8-128 characters to the #password input
alert("you get 128 characters");
console.log("yg128ch");
alert("You also get to chose more options");
console.log("great");

//var passwordLength = prompt("Hi Pick a password length from 8-128 characters");
var passwordNew = [];
var writePassword = [];
var specialCharacters = confirm ("Do you want special characters");
passwordLength = prompt ("what is your password length?")
var lowerCase = confirm ("Do you want lower case");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','g','r','s','t','u','v','w','x','y','z'];
var upperCase = confirm ("Do you want upper case");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericOnly = confirm ("Do you want numbers");
var numericOnly = ["1","2","3","4","5","6","7","8","9","0"]
var characterType = ["$","%","&",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","}","~",];
  //if (true);
   // return characterType.push(passwordNew);
   // else;


// create condition statements less then 8 also more then 128  (is not a number!!!!!)
// create condition statements
// create confirm for numbers and sp ch

// create 4 different arr






function generatePassword() {

  for (var i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * 129) + 9;
    passwordNew = passwordNew + writePassword[randomCharacter];


    if (passwordLength >= 8 || passwordLength <=128 ) {
    if (lowerCase + upperCase + numericOnly);
    
    return writePassword;





    //var computerPick = computerPick[randomNumber];
    //console.log(computerPick);
    //computerPick.push(writePassword);
    //console.log("Password Text", passwordText);
    //computerPick.push(writePassword);
    //writePassword.push(placeholder);

   
  }

}

//console.log(password.computerPick);
//console.log(passwordCharacters.computerPick);
//console.log(passwordLength.computerPick);
//console.log(characterType.computerPick);
//console.log(lowerCase.computerPick);
//console.log(upperCase.computerPick);
//console.log(numericOnly.computerPick);

//var 


// Generate password 8-128 characters to the #password input
//var passwordLength = prompt("Hi Pick a password length from 8-16 characters")
  // 
// Password Characters
//var passwordCharacters = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,g,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6,7,8,9,0,,%,^,&,*,?'];
  //for(var i = 0; i < passwordCharacters.length; i++);
  //if(){prompt("")}
  //console.log("passwordCharacters")


  //prompt.passwordLength("Hi Pick a password length from 8-16 characters")

//console.log("passwordLength");


// TODO: Gen a password and replace the return string with a real wasword string
//for (var i = 0; i <= password.length; i++) {
  //if ()
  //console.log("Hello");


//}



  //function generatePassword() {
  //return ("This Is Not My Final Password")
  //}
//}

// 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Password 



//  document.getElementById("").innerHTML = Math.random();