// let a = "abc@123"

// console.log(a);
// console.log(typeof(a));

// let b = 'hello'

// console.log(b);
// console.log(typeof(b));








//    ******* in-built function********

let  firstName = "Abhishek";
let  lastName = " Kumar" ;

console.log(firstName);
console.log(lastName);

// ---- 1. length ----
let Length = firstName.length ; 
console.log(l=Length);

// ---- 2. toUpperCase() or toLowerCase() ----

let uppercaseInFirstName = firstName.toUpperCase() ;
console.log(uppercaseInFirstName);

let lowercase = lastName.toLowerCase();
console.log(lowercase);

// ---- 3. include() -----
// include :- Check if value exits or not

let includeName = firstName.includes("Abhishek"); 
console.log(includeName);
 
//---- 4. indexof()----
 
let checkindex = firstName.indexOf("Ashek");
console.log(checkindex);
 
// ---- 5. slice() -----
 
// let  firstName = "Abhishek";
// let  lastName = " Kumar" ;

// let sliceName = firstName.slice(-5);  // ishek

let sliceName = firstName.slice(0,5);
console.log(sliceName);

// --- 6. Substring ------
// Substring it can be nor read negative number 
let subName = firstName.substring(1 ,4);
console.log(subName);


// ---- 7.  replace() -----

let replaceName = firstName.replace("Abhishek" , "Parul") ;
console.log(replaceName);

// ----- 8. ReplaceAll() ----

let  ReplaceAllName = firstName.replaceAll("h" ,"Q");
console.log(ReplaceAllName);

// ---- 9. trim() ------

let trimName = firstName.trim() ;
console.log( firstName + " --after use trim not any change --> "+ trimName);

// ---- 10. split -----

let splitName = firstName.split(",");
console.log(splitName);


//---- 11. charAt()-------

let charAtName = firstName.charAt(0);
console.log(charAtName);

//--- 12. concat() ------
// join two varible valu like firstName + lastName 

// let  firstName = "Abhishek";
// let  lastName = " Kumar" ;

let concatName = firstName.concat("", lastName);
console.log( "  use concat to join to varible -->" + concatName);


// --- 13.  Escape Characters ---------
// used to handle special character 

let Full_Name = firstName + lastName ;
console.log(Full_Name);

let arr4 = [1,2,3,4] ;
let arr5 = [5,6,7,8] ;

let arr6 = arr4 + arr5 ;
 console.log()
