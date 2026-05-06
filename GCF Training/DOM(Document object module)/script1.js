//----------***DOM***-----------------------------------------------
//--------------------------------------------------------------------
document.write("I am working on Dome");

// document.getElementById();


///----------make function -----

function changeTextColor_white(){

    let title = document.getElementById("title"); // header ka object type modul hai 

    console.log(title);

    title.style.color = "white"


}
function changeSpanBackgroundColor(){
    let span = document.getElementById("span");
    console.log("span") ;
    span.style.backgroundColor = "yellow"
    
}

function changeTextColor_blue(){

    let title = document.getElementById("title"); // header ka object type modul hai 

    console.log(title);

    title.style.color = "blue"


}

function changeTextColor_yellow(){

    let title = document.getElementById("title"); // header ka object type modul hai 

    console.log(title);

    title.style.color = "yellow"
    title.style.backgroundColor = "green"


}

// let buttons = document.querySelectorAll("button");

let texts = document.getElementsByClassName(".text") ;
texts.style.color = " pink" ;