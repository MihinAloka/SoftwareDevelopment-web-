var form = document.getElementById("foodForm");
var input = document.getElementById("foodInput");
var list = document.getElementById("foodList");

form.onsubmit = function(e) {
    e.preventDefault();

    if(input.value == "") return;

    var foods = localStorage.getItem("foods");
    if(foods) {
        foods = JSON.parse(foods);
    } else {
        foods = [];
    }

    foods.push(input.value);
    localStorage.setItem("foods", JSON.stringify(foods));
    input.value = "";

    showFoods();
};

function showFoods() {
    var foods = localStorage.getItem("foods");
    if(foods) {
        foods = JSON.parse(foods);
    } else {
        foods = [];
    }

    list.innerHTML = "";
    for(var i = 0; i < foods.length; i++) {
        list.innerHTML += foods[i];
    }
}
showFoods();
