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

var passwordLength = prompt("Hi Pick a password length from 8-128 characters");
console.log(password);
var characterType = alert("Hi Yes or No for the following.");
var lowerCase = confirm("?Lower Case?");
var upperCase = confirm("Upper Case?");

var passwordNew = [];
var writePassword = [];
var passwordCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','g','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','%','^','&','*','?'];
console.log(passwordCharacters);

function generatePassword() {
  for (var i = 0; i < 10; i++) {
    var password = Math.floor(Math.random() * 129) + 9;
    console.log(password);
    var computerPick = computerPick[randomNumber];
    console.log(computerPick);
    computerPick.push(writePassword);
    console.log("Password Text", passwordText);
    writePassword.push(placeholder);

  }
  computerPick.push(writePassword);
  console.log("Hello");
}
console.log("Hello");




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