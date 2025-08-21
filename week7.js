let student ={
    "name": "Mihin",
    "age" : 17,
    "Subjects":["SSP","SD","Webdev"]
};
//simple JSON object
// console.log(student.name);
// console.log(student.age);
// console.log(student.Subjects[0]);

// let object ={
//     "name": "Apple",
//     "price": 200, 
//     "category":"Fruit",
//     Stock : 50
// };

// console.log(object.name);
// if(Stock > 0){
//     console.log(object.name)
// }



//Two types of JSON//

// JSON.stringify
// JSON.parse

// console.log(student.Subjects[0]);
// let student2 = JSON.stringify(student);
// console.log(student2.name);
// let student3 = JSON.parse(student2);
// console.log(student3.name);


/*
Create a car object,brand model and year covert it to json string parse it back and log the brand
*/

// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020
// };

// let car2 =JSON.stringify(car);
// console.log(car2.name)

// let String = JSON.stringify(car);
// console.log(String);

// let parsed = JSON.parse(String);

// console.log(car.brand);

// let settings ={
//     theme: "Dark",
//     "fontsize": "16px"
// };

// localStorage.setItem("userSetting",
//     JSON.stringify(settings));

// let saved = localStorage.getItem("userSettings");
// console.log(JSON.parse(saved));

/*Favourite item
1.) crete small form with a input and a button "Save to favourites"
2.) on button click
    -take input text
    -save into local storage as JSON array(array of food)
3.)Display all the ood from the local storage
*/

