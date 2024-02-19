// let age= 17;
// let sex= "M";
// // this is nested operator
// if(age>=18){
//     if((age>=21) && (sex==="F")){
//         console.log("you are adult and go for marrige: female" )
//     }
//     else if ((age>=24) && (sex==="M")){
//         console.log("you are adult and go for marrige: male" )
//     }
//     else{ 
//         console.log("you are adult but not go for marrige")
//     }
// }
// else{
//     console.log("you are not adult")
// }
// // this is logical operator
// let num= 20

// if((num+4===24)&&(num%2===5 || num*1===20)){
//     console.log("this statement is true")
// }
// else{
//     console.log("this statement is flase")
// }
// // switch statement
// let color="green";
// switch(color){
//     case "red":
//         console.log("stop")
//     break
//     case "yellow":
//         console.log("go slow")
//     break
//     case "green":
//         console.log("go")
//     break
//     default:
//         console.log("light broken")
// }
// let daynum= 8;

// // week days
// switch(daynum){
//     case 1:
//         console.log("sun")
//     break
//     case 2:
//         console.log("mon")
//     break
//     case 3:
//         console.log("tue")
//     break
//     case 4:
//         console.log("wed")
//     break
//     case 5:
//         console.log("thu")
//     break
//     case 6:
//         console.log("fri")
//     break
//     case 7:
//         console.log("sat")
//     break
//     default:
//         console.log("this is not valid")
// }
// let name= prompt("enter your name: ");
// let age= prompt("enter your  age: ");
// let mgs = name+" " +"is " + age +" "+"years old" + "!";
// console.log(name +" "+"is " + age +" "+"years old" + "!");
// alert(mgs);
// let num_a= 200;
// let num_b=50;
// let num_c=22;

// if(num_a>num_b){
//     if(num_a>num_c){
//         console.log("a is largrst num")
//     }
// }
// else if(num_b>num_c){
//         console.log("b is largest num")
//      }
// else{
//     console.log("c is largest num")

// }
// let str= "          sunainalovejeetendra";
// console.log(str.indexOf("A"))
// console.log(str.length-(str.indexOf("e"))+1)
// console.log(str.toUpperCase())

//  string always be Immutable
// let name="Rolly";
// console.log(name[0]="jeeten")
// console.log(name.indexOf())
// console.log(name.toUpperCase())



// Array always be Immutable
// let fruits= ["apple","mango","banana"];
// console.log(fruits[1]="grapes");
// console.log(fruits.reverse());
// console.log(fruits[0].toUpperCase())


// // concatenate (do chij ko jorna) array
// let cars= ["audi","bmw","xuv","hyndai"];
// let bikes=["bmw","royal","honda"];
// let mix= cars.concat(bikes);

// let num0=[2,4,9,-1, -9,-8,7,6,-7];
// let n=5;
// let ans=num0.slice(0,n);
// console.log(ans);

// let ans5=("apnacollz","rolly","dolly");
// console.log(ans5.toUpperCase());

// let ans6=["RAM",3,6,"B",-1,55];
// let item= "A";

// if(ans6.indexOf(item)!= -1){
//     console.log("print")
// }
// else {console.log("no print")}

// loop 
// for(let i=7; i<=70; i= i+7){
//     console.log(i)
// }

// let n = prompt("enter the number!");
// n = parseInt(n);

// for(let i=n; i<=n*10; i= i+n){
//     console.log(i);
// }

// for(let i=1; i<=10; i=i+2){
//   console.log(`outer loop ${i}`)

//     for(let j=1; j<=10; j=j+2){
//         console.log(j)
//     }
// }
// let i =5;
// while(i>=1){
//     console.log(i);
//     i--;
// }

//Game 
// let marrigeday="Sunday";
// let guess= prompt("Enter your marrige day name!");

// while(marrigeday!=guess){
//     if(guess=="quit"){
//         console.log("you quit");
//       break;
//     }
//     guess= prompt("wrong, Try again!")
// }
// if(marrigeday===guess){
//     console.log("congrats!")
// }

//Loop with Array
// let nameofgod=["Shiv","Ram","Sai","Ganesh"];
// nameofgod.push("devi");

// for(let i=0; i<nameofgod.length; i++){
//     console.log(i, nameofgod[i]);
// }
//when we want revese
// for(let i=nameofgod.length-1; i>=0; i--){
//     console.log(i, nameofgod[i])
//  }
// let arr=[1,2,3,4,5,6,2,3];
// let num= 2;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]===num){
       
//         arr.splice(i, 1);
//     }}
//     console.log(arr);


//     let fact= 5;
//     let f=1;
//     for(let i=1; i<=fact.length; i++){
//         f *= i;
    
//     }
//     console.log(`factorial is ${f} other ${fact}`  )


// Guessing game::::::

// const user= prompt("enter any number ");
// const num= Math.floor(Math.random()*user)+1;
// let guess= prompt("guess what is random number");
// let count=1;

// while(count < 10) {
//     if(guess=="quit"){
//         console.log('quit the game');
//         break;
//     }
    
//          if (guess == num) {
//         console.log(`you win in ${count} attempts and the number was`, num );
//         break;
//          }
//          else if(guess < num) {
//             guess= prompt(`hint: too small, try again still ${10-count} attempts pending`);
//             count++;
//             }
//          else {
//         guess= prompt(`hint: too large, try again still ${10-count} attempts pending`);
//         count++;
//          }

// let arr= [1,2,3,4,5,6,123,1,2,3,4,5,6]

// const arrvg=(arr)=>{
//     let total= 0;
//     for(let num of arr){
//         total+=num
     
//     }
//     return total/arr.length;
// }
// console.log (arrvg(arr));

// let arr= [10,20,30,40,11,6]

// when reminder is ture
// let num= arr.every ((el) => {

//         return el%10 == 0 ;
  
// });

// for smallest num
// let num= arr.reduce((num,el) => {
//     if(num < el){
//        return num;
//     }else{ 
//         return el;
//     };
    
// });
// console.log(num);

// function sum(...args){
//     for(let i=0; i<args.length; i++){
//         console.log("you are right", args[i])
//     }
// }

// let obj={
//     n: "sun",
//     m: "jan",
//     n: "dl",
//     m: "mn",
//     n: "pp"
// }
// let {n,m}=obj;

//practice on website...
// let btn= document.querySelector("button");
// let div=  document.querySelector(".div");

// btn.addEventListener("click", function () {
    
//     let randomColor = getRandomColor();
//     let rolly = document.querySelector("h1");
//     rolly.innerText = randomColor;
//     div.style.backgroundColor = randomColor; 
//     console.log("color updated");

// });
// btn.addEventListener("click", function () {
//     let sweet = document.querySelector("h1");
//     sweet.style.backgroundColor = "red";
// });

       
// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
    
//     let color= `rgb(${red},${green},${blue})`;
//     return color;
// }

// let h3 = document.querySelector("h3");
// let plist = document.querySelectorAll("p");
// let b =document.querySelectorAll(".btn1");

// plist.forEach(function (p) {
//       p.addEventListener("click", function () {
//        this.style.backgroundColor= "red";

//     });
// });

// h3.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor= "blue";
// });

// b.forEach(function (btn1) {
//       btn1.addEventListener("click", function(){
//          this.style.backgroundColor="yellow";
//       })
    
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function() {
//     alert("submit the form");
// })

// let btn= document.querySelector(".btn2");
// let inp= document.querySelector("input");
// let ul= document.querySelector('ul');

// btn.addEventListener("click", function() {
//     let item= document.createElement("li"); //for listing task 
//     item.innerText= inp.value;
//     let delBtn= document.createElement("button"); //for delete task 
//     delBtn.innerText= "delete";
//     delBtn.classList.add(".del");

//     item.appendChild(delBtn);
//     ul.appendChild(item); 
    // let inputText = inp.value;
    // let inputValid= inputText.replace(/[^a-zA-Z\s]/g, ""); //for save only valid text
    // input.textContent = inputValid;
    // console.log(inputValid);
    //inp.value = "";    //for text enter the input and after summitted auto revome the text

//});

// ul.addEventListener("click", function() {
//     if(event.target.nodeName){
//         let allbtn= event.target.parentElement;
//         allbtn.remove();
//         console.log("delete")
//     }

// })


// let delBtns=document.querySelectorAll(".del");

// for (delBtn of delBtns){
//     delBtn.addEventListener("click",function() {
//     let par=this.parentElement;
//     // console.log(par);
//     par.remove();
// });
// };

// function savetoDb(data){ //promise method
//     return new Promise((resolve, reject)=>{
//         let xyz = Math.floor(Math.random()*5)+1;
//         if(xyz > 3){
//         resolve("the result is win");
//         }reject("the data gives error");
//     });
    
// }

// savetoDb("sunaina") //this is called promise chaining method

// .then((result) => {
//     console.log("data-1");
//     console.log(result);
//      return savetoDb("jeeten");
// })

// .then((result)=>{
//   console.log("data-2");
//   console.log(result);
//   return savetoDb("kashish");
// })

// .then((result)=>{
//     console.log("data-3");
//     console.log(result);
// })

// .catch((error) => {
//    console.log("bye");
//    console.log(error);
// });





h2 = document.querySelector("h2");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h2.style.color= color;
            console.log(`colorchange ${color}`);
            resolve("change")
        },delay); 
    });
};

async function demo(){
  try {
    await changeColor("red",1000)
  await changeColor("green",1000)
  await changeColor("yellow",1000)
  await changeColor("blue",1000)
  } catch{
    console.log("err cought")
  }
 

  let a= 5;
  let b=5;
  console.log(a+b);
}

let names = ["ram", "sita", "shiv", "sati"];

function whosPaying(names) {
    console.log("hello1");

    let Person = names.length();
    console.log("hello2");

    let randomName = Math.floor(Math.random()* Person) + 1; 
    console.log("hello3");

    let randomPerson = names[randomName];
    console.log("hello4");

    
    return randomPerson + " is going to buy lunch!"
    
    }
whosPaying();

