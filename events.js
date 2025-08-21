// function changeColor() {
//             let color = document.getElementById("color").value;
//             document.getElementById("myParagraph").style.color = color;
//         }


// document.getElementById("myInput").addEventListener('keyup' , function(){
//     document.getElementById("output").innerHTML = this.value;
// });


//this refers to the element that recieves the event 
//in this case,its the input
//therefore,when the event is triggerd by the input, the output paragraph's value
//is changed to the inputs value

document.getElementById("box")
.addEventListener('mouseover', function(){
    this.style.background="green";
});

document.getElementById("box")
.addEventListener('mouseout' , function(){
    this.style.background = "blue";
});

document.getElementById("text")
.addEventListener("dblclick", function(){
    this.style.color = "red";
    this.style.backgroundColor = "blue";
});

document.getElementById("heart")
.addEventListener('dblclick',function(){
    this.textContent = "❤️"
})

document.getElementById("email")
.addEventListener("focus",function(){
    this.style.border = "6px solid blue";
});

document.getElementById("email")
.addEventListener("blur",function(){
    this.style.border = "4px solid gray"
    //can be used to say input is optional
    //or that it needs to be filled
})

//that makes it zoom in and out when hovered and go back to normal


//use the DB click on a paragraph called Like Show the heart Emoji

