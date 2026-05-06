// ******  *** ARRAY  ***** ****** *****

// make a one simple array 

let x =[1 , 2 , 3, 4, 5 , 6 ]; // daynemic array
console.log(x);
console.log(typeof(x));
console.log(x[2]);
console.log(typeof(x[2]));

// store a diffrent type of value in same varible

let arr1 = [1 , "hello" , 'R' , true] ;
 console.log(arr1);
console.log(typeof(arr1));


//--------- 2. length ----------

// let lengtharr1  = arr1.length;
// console.log(lengtharr1);

console.log(arr1.length);

//--------- 3. push()
// --->inserta new value in array 
// add a use of push add number end of the array
let arr2 = [1,2,3,4,5,6];

console.log(arr2);
arr2.push(7);
console.log(arr2);

//---------4.pop()-----
//delet a value of last array value

arr2.pop();
console.log(arr2);

//-------5. unshift -----
// add a new value in first index of the array

arr2.unshift(0);
console.log(arr2);


//-----6. shift -------
// reove first index value of an array 

arr2.shift();
console.log(arr2);

//------- 7. include()------

let includearr2 = arr2.includes(1);
let includearr2CheakValue7 = arr2.includes(8)
console.log(includearr2);
console.log(includearr2CheakValue7);


//------ 8. slice -------


let arr3 = ["apple", "banana" , "mango" , "tree" , "car" , "home"];
console.log(arr3);
// let arr3=[1,2,3,4,5,6,7];
let sliceofArr3 = arr3.slice(1,3);
console.log(sliceofArr3);

// ----- 9. splice()-----
// *suntax - arr.splice(start , deleteCount , Item);

//==== delet 
arr3.splice(3,2);
console.log(arr3); // tree , car  remove 

// == =add  ============

arr3.splice(3,0,"tree" , "car" );


// ----- 10. concat ------------

let arr4=[1,2,3,4,5];
let arr5=[5,6,7,8];

let arr6 = arr4.concat(arr5);

console.log(arr6);  
  
// --------- 11. join -----------

let joinarr4 = arr4.join();
console.log(joinarr4); // remove bracket

joinarr4 = arr4.join(" ");
console.log(joinarr4); //remove comma ;

let arr7=["I","like","parul"];
console.log(arr7);

let joinarr7=arr7.join(" ");
console.log(joinarr7); // make a char join array use of join() ;

//-------- 12. reverse()----------

let reverseArr7= arr7.reverse();
console.log(reverseArr7);

let joinReverseArr7= reverseArr7.join(" ");
console.log(joinReverseArr7); // arr7 make first revers and next step make a join remove comma and brecket ;

//------- 13. Sort---------
// arrange a own array incrising or dicrishing set a manar way 

let arr8 = [4,5,6,2,3,1,8,7,9];

arr8.sort((a,b)=>b-a);
console.log(arr8); // arrange in esendig order 
 
arr3.sort( );

let joinSortArr3 = arr3.join(" ");
console.log(arr3);
console.log(joinSortArr3); // arrange string to use sort();

// --------- 14. map -----------

let mapingArr6= arr6.map(x => x*x );
console.log(mapingArr6);

let numbers = [1, 2, 3];

let doubled = numbers.map(function(num){
    return num * 2;
});

console.log(doubled);


//-------- 15. filter -------------

let arr10 = [3,2,100,60,41,5];

let filterArr10 = arr10.filter(x=> x>=10);
// in this arr10 remove belove 10 value
console.log(filterArr10);

//---------- 16. reduce() => sum-----------

let sumArr10= arr10.reduce((total,curent)=>{return total + curent});
console.log(sumArr10);
