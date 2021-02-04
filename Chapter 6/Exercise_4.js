// --------------- BORROWING A METHOD --------------- //


//Books solution explained.
let map = {one: true, two: true, hasOwnProperty: true};

//This calls the method inside the map object.
console.log(map.hasOwnProperty);
// Lets compare something.
console.log(Object.getPrototypeOf(map).hasOwnProperty) //---> [Function: hasOwnProperty]
console.log(typeof(map.hasOwnProperty)) //---> boolean
//As you can see, inside the map object prototype there is a method called hasOwnProperty wich returns a function call, while the map object hasOwnProperty returns just a boolean. 
//This means both are different things. So we can call the prototypes method like this.
console.log(Object.prototype.hasOwnProperty.call(map,"one")) //---> true


//My own idea of a solution.
//Since map is an object and what we want is to know if map has a property named "one" we can use this, we check in the object keys if one is included.
console.log(Object.keys(map).includes("one")) //---> true
