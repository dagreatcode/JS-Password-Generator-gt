// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password 8-128 characters to the #password input
prompt("Hi Pick a password length from 8-128 characters");

function generatePassword() {
  for (var i = 0; i < 10; i++) {
    var password = Math.floor(Math.random() * 129) + 9;
    console.log(password);
    var computerPick = computerPick[randomNumber];
    console.log(computerPick);
    if generateBtn
    alert("you get 128 ch")
  }
}

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