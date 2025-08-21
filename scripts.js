 // alert("Hello World");

// console.log("Hello wolrd");

// let name = "Mihin";
// console.log(name);

// let age = 17
// console.log("Age Is " + age)


// let num1 = 2
// let num2 = 3
// let add = num1 + num2
// function one(){
//     alert ("Result is " + add);
// }
// let msg = document.getElementById("msg");
// function changeText(){
//     msg.innerText = "Text is Changed";
    
// }
// console.log(msg)
// let after = 1500 - (1500*0.1)
// let price = document.getElementById("price");
// function discount(){
//     price.innerText = "Rs."+ after
// }
// console.log(price)

let h1 = document.getElementById("h1");
function change(){
    h1.style.backgroundColor = "red";
    h1.style.padding="1"
    h1.style.justifyContent="1"
    h1.style.scale="1"
    // h1.style.display = "none";
}
function setDarkTheme(){
    document.documentElement.style.setProperty('--bg-color', 'black');
    document.documentElement.style.setProperty('--text-color', 'white')
}
function setLightTheme(){
    document.documentElement.style.setProperty('--bg-color', 'white');
    document.documentElement.style.setProperty('--text-color', 'black')
}