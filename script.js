var str_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("") //26
var str_lower = 'abcdefghijklmnopqrstuvwxyz'.split("")  //26
var numbers = '0123456789'.split("")  //10
const symbols = '!@#$%^&*(){}[]=<>/,.'.split("")  //20
var characters = []
var result = document.getElementById("result")
var text = document.createElement("b")
result.appendChild(text)
var generate = document.getElementById("generate")
var copy = document.getElementById("copy")
var password =  ""
copy.addEventListener("click", ()=>{
   navigator.clipboard.writeText(password).then(
       ()=> console.log("okay")
   ).catch(err => console.log(err) )
})
generate.addEventListener("click", function generatePassword (){
    var length = +document.getElementById("password").value
    var lower = document.getElementById("lowercase").checked
    var upper = document.getElementById("uppercase").checked
    var number_checked = document.getElementById("number").checked
    var symbol_checked = document.getElementById("symbol").checked
    if (lower) {characters = characters.concat(str_lower)}
    if (upper) {characters = characters.concat(str_upper)}
    if (number_checked) {characters = characters.concat(numbers)}
    if (symbol_checked) {characters = characters.concat(symbols)}
    password = generateRandomPassword(length, characters)
    text.innerHTML = password
    copy.removeAttribute("hidden")
    characters = []
})

//generate random password
const generateRandomPassword = function(length, charaters) {
    password = ''
    index = ''
    for (var i =0; i <length; i++) {
        var pass_index  = Math.floor(Math.random()*(charaters.length-1))
        var char = charaters[pass_index]
        index += ' '
        index += pass_index.toString()
        password += char
    }
    //console.log(index)
    return password

}

//generate password only with lowercase charaters
const generateLowerPassword = function(length){
    password = ''
    for (var i =0; i <length; i++) {
        var char = str_lower[Math.floor(Math.random()*25)]
        password += char
    }
    return password
}

//generate password only with uppercase charaters
const generateUpperPassword = function(length){
    password = ''
    for (var i =0; i <length; i++) {
        var char = str_upper[Math.floor(Math.random()*25)]
        password += char
    }
    return password
}

//generate password only with  numbers
const generateNumberPassword = function(length){
    password = ''
    for (var i =0; i <length; i++) {
        var char = numbers[Math.floor(Math.random()*9)]
        password += char
    }
    return password
}
//generate password only with symbols
const generateSymbolPassword = function(length){
    password = ''
    for (var i =0; i <length; i++) {
        var char = symbols[Math.floor(Math.random()*19)]
        password += char
    }
    return password
}




