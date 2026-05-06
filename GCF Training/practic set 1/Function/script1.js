//----------** unknown function , mistry function **---
// ----------** 1. Normal Function-------
function greet1(){
// code of block ;
  console.log("----**1. Normal Function**----");
  let msg= "=> Hi Welcome to JavaScript";
  console.log(msg);
}

// ---** 2. paremiter raish function **------

function greet2(name){
    console.log("----*2. perameter pass*-----")
    let msg= "=> Hay " + name + " Wellcome to javaScript" ;
    // return "Hello " + name;
    console.log(msg);
  }

  function sum(a , b){
    let add = a +b ;
    console.log('=> sum of number :',  a ,"+" ,  b , "=" , add);
    console.log(add);
  }

  const add = (a,b) => a+b;

  //---**function in use arr**---//

  //---*using in maping **------//

  
  let arr1 = [1,2,3,4,5,6,7,8,9];

  function arrdouble(arr){
     let d = arr.map(num => num * 2);
    // console.log(d);
     return d ;
  }

  //-------------------------------------------------------//
  //--------**** Call Function ****--------------//

  greet1();

  greet2("Abhishek");

  sum(10 , 20);

  arrdouble(arr1);

//-----------------------------------------------------------//
//------------------*** Call an sentance ***------------//

  console.log("---*3. Arrow Function * --------");

  console.log(add(10,25));

  console.log("-_-_-_-_-_-_-_-_-**4. we can make function to access array:  **-_-_-")

console.log("=> we can double this array :",arr1);
  // let arr1 = [1,2,3,4,5,6,7,8,9];
console.log(  arrdouble(arr1));

  // -_-_-_-_-_-_-_-_-*** 5. Function Expression ***-_-_-_-_-_-_-_-_-//

  console.log("----**5. Anonymous Function / Function Expression**-------")

const fun = function (Name){
  console.log("Hii", Name , " i can decler difrant way");
}

fun("Abhishek");



//*********practice *********//
const sum2 = function (a,b){
   let sumofToNumber= a+b;
  //  return sumofToNumber;
 console.log("sum fo " , a ,"or" , b , "=", sumofToNumber);
}
console.log("*** practice set ***");
sum2(25,46);

//--------** 6.  Anonymous Function **--------------//
//==================================================//
console.log("----**6.  Anonymous Function **-----")

setTimeout(function(){
// code of block

console.log("Hello After Two Second");

},2000);

function pay(){
  console.log("Payment Processing......");

  setTimeout(function(){
    console.log("Payment Successful 💵💲")

  } , 3000);
}
pay();


let time= 4;

let timer = setInterval(function(){
  console.log(time);
  time--;
  if(time<0){
    clearInterval(timer);
    console.log("Done")
  };
} , 1000);