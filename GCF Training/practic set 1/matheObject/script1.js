//***********math object in js ********* *
// ---1.math.pi ---------
let piValue = Math.PI ;
console.log("--**get value to PI**--")
console.log(piValue);



//----2.        ---------//
//give to value a const E ;
console.log("----**Give a vlalue of E **----");
let eValue = Math.E;
console.log(eValue);


//---- 3. roundoff ---//
// Round to nearest integer
console.log("----**Round to nearest integer 4.3 ***----")
let num1float = 4.3 ;
let convertint = Math.round(num1float);

console.log(convertint);

//----4. ceil ////
//round up
console.log("---** round up 4.1**----");
let decimalNum = 4.1 ;
let useCielNum = Math.ceil(decimalNum);

console.log(useCielNum);

//------5. floor ---------//
// round down 
console.log("---*** round down 4.9 **----");
let makeFloor = 4.9;
let convertFloor = Math.floor(makeFloor);  // round down
 console.log(convertFloor);
//------ 6. trunc ----------

let trunc = 4.9 ;
let truncConvert = Math.trunc(trunc);
// this is remove decimle value ;

console.log(truncConvert);

//------- 7. rendom --------

let useRendom= Math.random();
// randomly throw to in 0 to 1 any give one radamly value 
console.log("-----Random number : -----");
console.log(useRendom);
console.log("---*Make a OTP----*");

let numOTP = Math.trunc((Math.random()*9000)+1000);
console.log(numOTP);

//---- 8. max or minimum -----
console.log("----*Minimum or maximum*----");
console.log(Math.max(10,3,2,4));
console.log(Math.min(10,2,3,4,5));
//-----
console.log("---*whith make an array use min or max *-----")

console.log("--*first without array *---");
let numarr1 = 10 ;
let numarr2= 3 ;
let numarr3 = 6 ;

let minarr1 = Math.min(numarr1 , numarr2, numarr3);
let maxArr1 = Math.max(numarr1 , numarr2, numarr3);

console.log(minarr1);
console.log(maxArr1);

console.log("------*Brack array use sprate \"... arr1\"-----** ");
let arr1 =[10,2,3,5,6,78];
console.log(...arr1);
let arrmin= Math.min(...arr1);
let arrmax = Math.max(...arr1);


console.log(arrmin);
console.log(arrmax);

//--------**9. power **----------
console.log("----*2 to the power 4 = 16 **-----")

let powNum1 = 2 ;
let powNum2 = 4 ;
let powToNum12 = Math.pow(powNum1 , powNum2);

console.log(powToNum12);

// -----* 10. sqrt * ------

let sqrtNum1= 100;
let sqrtNum2 = 25 ;
console.log("---* use of sqrt to giv e a 100 squer rute ***----");

let sqrtValu1 = Math.sqrt(sqrtNum1);
console.log(sqrtValu1);

//-----* 11. posirive Number --------
console.log("----*convert nagetive to positive -65 => 65*----")
let nagNumber1 = -65 ;
let posNum1 = Math.abs(nagNumber1);
console.log(posNum1);

// ------* 12. sign *----------
let signNum1 = 41 ;
let singNum2 = -52;
let signNum3 = 0 ;
console.log("-----** find to which sign of number*---")
console.log(Math.sign(signNum1));
console.log(Math.sign(singNum2));
console.log(Math.sign(signNum3));

//----------**13. Natural Logarithm *---------
//Math.log()
console.log("----* find a log of 2 base of 10*----");
console.log(Math.log10(2));

