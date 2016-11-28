"use strict";

function waitForThreeSeconds() {
    
    var ms = 3000 + new Date().getTime();
    
    while(new Date() < ms){
       
    }
    console.log('Finished Function.');
    
}

function clickHandler(){    
    
        console.log('Clicked..!');
}

function checkEquality()
{
    var a = false;
    var b = 0;
    var c = 0;    // Checking equality for true and false in 'if' statement.
    
    
    if(c || c === 0) // The strict equality prevents 0 to become false and make the statement true.
    {
        
        console.log('Something is there!');
    }
    
    
    if(a == b)
    {
        console.log('This is equal!');        
    }
    else{
        console.log('This is not equal!');
    }    
}


function greetMe(myName) 
{
     myName = myName || '<Please enter your name here>' // The OR(||) operators choose the default value if no appropriate value is provided.
    // the myName variable choose the value which returns true. 
     console.log("Hello " + myName);    
}


greetMe(); 


document.addEventListener('click', clickHandler);

waitForThreeSeconds();
console.log('Done with code.')
checkEquality();

console.log(varName);