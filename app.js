
const currentDiv = document.getElementById("user");
const form = document.getElementById("form");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let name = e.target.name.value;
  let age = e.target.age.value;
  let gender = e.target.gender.value;
  let hotr = e.target.hotr.checked ? e.target.hotr.value : "";
  let coldr = e.target.coldr.checked ? e.target.coldr.value : "";
  let drinkType = e.target.drinkType.value;

  render(name, age, gender, hotr,coldr, drinkType);
});


function render(name, age, gender, hotr,coldr, drinkType){
let namej = document.createElement('p');
let agej = document.createElement('p');
let genderj = document.createElement('p');
let hotrj = document.createElement('p');
let coldrj = document.createElement('p');
let drinkTypej = document.createElement('p');

namej.textContent = name;
agej.textContent = age;
genderj.textContent = gender;
hotrj.textContent = hotr;
coldrj.textContent = coldr;
drinkTypej.textContent = drinkType;


currentDiv.appendChild(namej);
currentDiv.appendChild(agej);
currentDiv.appendChild(genderj);
currentDiv.appendChild(hotrj);
currentDiv.appendChild(coldrj);
currentDiv.appendChild(drinkTypej);

};
























// // document.body.onload = addElement;

// // function addElement() {
// //   // create a new div element
// //   const newDiv = document.createElement("div");

// //   // and give it some content
// //   const newContent = document.createTextNode("Hi there and greetings!");

// //   // add the text node to the newly created div
// //   newDiv.appendChild(newContent);
// //   const currentDiv = document.getElementById("user");
// //   document.body.insertBefore(newDiv,currentDiv);

// //   // add the newly created element and its content into the DOM
// //   // const currentDiv = document.getElementById("div1");
// //   // document.body.insertBefore(newDiv, currentDiv);
// // }
// // addElement();

// // function sanitise(x) {
// //     if (isNaN(x)) {
// //       return NaN;
// //     }
// //     return x;
// //   }

// // let num = prompt("enter a number berween 0 - 100");

// //     while((num >100 || num <0 ) && sanitise(num)){
// //         num = prompt("enter a number berween 0 - 100");

// //    }
// //    alert("the number you entered is " + num)

// // for (i = 1; num > 100 || num < 0; i++) {
// //   num = prompt("enter a number berween 0 - 100");
// // }
// // alert("the number you entered is " + num);

// // for(let i=1;i<=1;i++){
// //     for(let j=1 ; j<=10 ; j++){
// //         console.log("*".repeat(j))
// //     }
// //         console.log("\n")
// //         }

// // let add = function(x,y){
// //   return x+ y ;

// // };
// // console.log(add(10,20));

// // let addR = (x,y) => x + y;
// // console.log(addR(10,20));

// // let addS = (x ,y) => {return x + y; }
// // console.log(typeof addS);











