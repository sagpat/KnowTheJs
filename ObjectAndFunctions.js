var person = new Object();

person["firstname"] = "Sagar";
person["lastname"] = "Patil";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.lastname);

person.address = new Object();


person.address.street = "12E Main Street";
person.address.city = "Pune";
person.address.phone = 183798;

console.log(person.address.street);
console.log(person["address"]["phone"]);


/* The above method is not preffered method for creating and using objects.
    Below is the preferred method to define and use the  Objects.
*/

var oPerson = {} // This is same as defining objects like - var person = new Object();

Sagar =         
    {
        firstname: 'Sagar',
        lastname: 'Patil',
        address: {
            street: '11W Street',
            city: 'Pune',
            phone: 9564654654,
        }
    };

console.log(Sagar.address.street);


function Person(firstPerson)
{
    console.log(firstPerson.firstname);
    console.log(firstPerson.address.city);
}


Person(Sagar);



/* Json and Object Literals 

The JavaScript Object Notation (JSON) is a data-interchange format.  Although not a strict subset, JSON closely resembles a subset of JavaScript syntax. Though many programming languages support JSON, JSON is especially useful for JavaScript-based apps, including websites and browser extensions.

JSON can represent numbers, booleans, strings, null, arrays (ordered sequences of values), and objects (string-value mappings) made up of these values (or of other arrays and objects).  JSON does not natively represent more complex data types like functions, regular expressions, dates, and so on.  (Date objects by default serialize to a string containing the date in ISO format, so the information isn't completely lost.) If you need JSON to represent additional data types, transform values as they are serialized or before they are deserialized.


*/

 
var objectLiteral = {
            firstname: 'sagar',
            isAProgrammer: true,
};

console.log(JSON.stringify(objectLiteral));   // stringify converts an object to Json.

var convertJsonToString =  '{ "firstname" : "Sagar", "isAProgrammer": true }'  // This is a valid JSON. Unlike JavaScript Object the key-value                                                                                  //pair is enclosed in a double quote notation in JSON.

console.log(JSON.parse(convertJsonToString));  // parse method converts a valid json string to Javascript object.
   


/* Functions - In JS functions are objects. A function can have a primitive, a method or an object property. */


function thisIsAnObject()   // Every function has 2 properties, NAME and CODE. Name is the functions name. Here thisIsAnObject is a funct. name.
{
    console.log('Hi');
}


thisIsAnObject.greetings = 'Hello!!';    // This is a valid js statement as the function can have an property. 

console.log(thisIsAnObject.greetings);



/* Anonymous function
   Anonymous function does not have a name property but it is referenced by its variable name and holds its position in memory.
*/


var anonymousGreet = function()  // The anonymous function treats the whole function as an object and evaluates it as an expression. 
{                                // So it puts the complete CODE to the variable as an expression unlike the simple function where the code is                                    // treated as simply lines to be executed.
    console.log('Hi there!');
}

anonymousGreet();


/*  Function expression  */

function log(a){    // a function is called as an parameter.
    a();            // fn 'a' is invoked. 
}


// A first class function is something which can be passed as a parameter to a function like a primitive type or a string.
log(function() {          //when a function is called as a parameter it treats it as an object.
    console.log('Hi this is function passed as an parameter..!');
});     





// By value and By Reference

// By Value - When a primitives value is assigned to other primitive it creates new location in memory for the other primitive.
var a = 2;
var b;

b = a; // By value. value of 'a' assigned to 'b' to new memory location. So even though you change value of b in later stage 'a' remains same.

a = 4;

console.log(a);
console.log(b);



// By reference (all obects including functions)

var obj1 = {greet: 'Hi'};
var obj2;

obj2 = obj1;  // Here both the objects refere to same location in memory.


// Mutate - To change something.
// Immutate - It can't be change.

obj1.greet = 'Hello!!'; // Mutate - change the value of the property. Even though this is done we will get the same result for both the objects                            //as they point to same location in the memory. 

console.log(obj1);
console.log(obj2);


// The call by reference will work even if we call the object even as a parameter to the function 
function changeGreet(obj4){
    obj4.greet = 'Hola!!';    
}

changeGreet(obj2);

console.log(obj1);
console.log(obj2);



// But equal oprator sets up new memory in space (new address)
// Now obj1 and obj2 will no longer poin to same location in memory.
// Technically every primitive  in js in by value and every object is by reference.

obj1 = {greet: 'Hoila..!'};

console.log(obj1);
console.log(obj2);
 


