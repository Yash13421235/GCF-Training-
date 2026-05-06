let x = Math.PI;
console.log(x);

let e = Math.E;
console.log(e);

let a = 4.3;
let b = Math.round(a);
console.log(b);

let ceil = 4.1;
let c = Math.ceil(ceil);
console.log(c);

let floor = 4.9;
let f = Math.floor(floor);// removing the decimal Vlaue 
console.log(f); 

let trunc = 4.9;
let t = Math.trunc(trunc);// removing the decimal Value
console.log(t);

let random = Math.trunc((Math.random()*900000)+100000);
console.log(random);

let arr = [10, 5, 20, 8];
// let n = 10;
// let n1 = 3;
// let n2 = 5;
console.log(...arr);

let min = Math.min(...arr);
let max = Math.max(...arr);

console.log(min);
console.log(max);

let num = 2;
let pow = 3;
let p = Math.pow(num, pow);
console.log(p);

let num1 = 150;
let s = Math.sqrt(num1);
console.log(s);

let pos = -40;
let abs = Math.sign(pos);
console.log(abs);

let lnum = 100;
let log = Math.log10(lnum);
console.log(log);