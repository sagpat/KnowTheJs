/* 'this' keyword  */


console.log(this); // this points to the global object 'window'.

function useThis(){    
    console.log(this);  // even if we create a function the this keyword still points to the global object 'window'.
    this.newVar = 'this still refers to global';  // the newVar refers to global.
}

var bb = function()
{
    console.log(this);   // and for function expression as well it points to the global object.
}

useThis();
bb();

console.log(newVar); // new var gets accessed from the global execution context.

var c = {
    aname : 'This is js object',
    bname : 'this is fun',
    get: function()
    {                                // when a function is actually attacted to an object it is referred as method.
        this.aname = 'This is cool'; // the aname property gets mutate. 
        console.log(this);           // the 'this' keyword refers to the object in which it recites. In this case the 'c' object. (lesson 33)    
    
        var setname = function(newname)
        {        
            this.aname = newname;   // since a function expression is created inside a method the 'this' keyword refers to the global execution.
        }
            setname('Update the js object');    //so the setsame can not update the aname property. 
            console.log(this);  
    }                                        // the best solution is to avaoid this kind of conditions and put the this is a different variable. 
}

c.get();


// the above pattern for the 'this' is fixed by assigning the 'this' to other object self.

var d = {
    a_name : 'This is js object',
    b_name : 'this is fun',
    get: function()
    {                                
        var self = this;   // since the self point to the same memory location as the both are objects and self easily gets mutate. 
        
        this.aname = 'This is cool'; 
        console.log(self);           
    
        var setname = function(newname)
        {        
            self.aname = newname;   
        }
            setname('Update the js object');    
            console.log(self);  
    }                                        
}

d.get();

//------------------------------------------------------------------------------------------------------------------------


/* Array in Javascript can hold literally anything. */

var arr = [
    1, 
    false,
    {
        fname: 'Sagar',
        addr: 'Pune'
    },
    
    function(name){
        var greet = 'Hello ';
        console.log(greet + name);
    },
    
    "This is array"    
]


console.log(arr[3](arr[2].fname));



//------------------------------------------------------------------------------------------------------------------------

// Immediately Invoked Function Expression(IIFE)


var greet = function(myname){
    
    console.log('Hello ' + myname);
}('Sagar');  // this is an example of IIFE. Here the function is immediately invoked.

console.log(greet);



(function(myfirstname){  // this is also IIFE and it is wrap in the paranthesis () this will be immediately invoked.
    
    console.log('Hello IIFE: '+ myfirstname);
})('Sagar');  // immediately invoked.

// Also watch lesson 41



//------------------------------------------------------------------------------------------------------------------------

/* closure -  */






