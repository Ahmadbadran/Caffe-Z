let nickname = prompt("Please enter your name: ");
let gender = prompt("please select your gender: (male/female)");
let ageB = prompt("please enter your age : ");


function gen (gender){

  while(gender != "male" && gender != "female"){
      gender = prompt("please select your gender: (male/female)");
  }
  if(gender =="male"){

  alert("Hello, MR." + nickname + "!");
  }
  else if(gender == "female"){
  alert("Hello, Mrs." + nickname + "!");
}
}
gen(gender);
let typeOfDrink = prompt("please choose what you wonna drink Hot or cold drink!!","hot");
let drink = prompt("Enter the name of the drink you like ... ");

alert("your drink " + drink + " is getting prepared !");

console.log("Hello " + nickname + " your order is "+ drink);

let arr = [nickname , gender , typeOfDrink , drink]
for(let i =0 ; i<arr.length;i++){

    console.log(arr[i])
}


const currentDiv = document.getElementById("user");

const newDiv = document.createElement("div");

const paragraph = document.createElement("p");

newDiv.appendChild(paragraph);

const name1 = document.createTextNode("name : " + nickname);
paragraph.appendChild(name1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
const genType = document.createTextNode("Gender : " + gender);
li1.appendChild(genType);
ul.appendChild(li1);

const li3 = document.createElement("li");
const Age = document.createTextNode("Age : " + ageB);
li3.appendChild(Age);
li1.appendChild(li3);

const li2 = document.createElement("li");
const drinks = document.createTextNode("drink : " + drink);
li2.appendChild(drinks);
li3.appendChild(li2);

newDiv.appendChild(ul);

currentDiv.appendChild(newDiv);


// document.body.onload = addElement;

// function addElement() {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);
//   const currentDiv = document.getElementById("user");
//   document.body.insertBefore(newDiv,currentDiv);

//   // add the newly created element and its content into the DOM
//   // const currentDiv = document.getElementById("div1");
//   // document.body.insertBefore(newDiv, currentDiv);
// }
// addElement();




// function sanitise(x) {
//     if (isNaN(x)) {
//       return NaN;
//     }
//     return x;
//   }

// let num = prompt("enter a number berween 0 - 100");

//     while((num >100 || num <0 ) && sanitise(num)){
//         num = prompt("enter a number berween 0 - 100");

//    }
//    alert("the number you entered is " + num)

// for (i = 1; num > 100 || num < 0; i++) {
//   num = prompt("enter a number berween 0 - 100");
// }
// alert("the number you entered is " + num);

// for(let i=1;i<=1;i++){
//     for(let j=1 ; j<=10 ; j++){
//         console.log("*".repeat(j))
//     }
//         console.log("\n")
//         }


// let add = function(x,y){
//   return x+ y ;

// };
// console.log(add(10,20));

// let addR = (x,y) => x + y;
// console.log(addR(10,20));

// let addS = (x ,y) => {return x + y; }
// console.log(typeof addS);