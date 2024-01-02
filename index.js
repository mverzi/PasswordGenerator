const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOneEl = document.getElementById('passwordOne')
const passwordTwoEl = document.getElementById('passwordTwo')

function generatePassword(length) {
    let password = ''
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

function handleClick() {
    const passOne = generatePassword(15)
    passwordOneEl.textContent = passOne
    const passTwo = generatePassword(15)
    passwordTwoEl.textContent = passTwo
}


