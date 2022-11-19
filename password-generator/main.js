const btn = document.getElementById("btn");
const passwordFields = document.querySelectorAll(".password");
const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");


function randomPassword() {
  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
  let password = "";

  while (password.length < 15) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}

btn.onclick = () => {
  password1.textContent = randomPassword();
  password2.textContent = randomPassword();
}
