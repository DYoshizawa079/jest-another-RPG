// Constructor for making birds
function Bird() { 
    // Set every Bird to have wings
}

// By the time the above is running, the Bird constructor has a prototype
Bird.prototype.flap = function() { 
    console.log("I'm flapping my wings"); 
}

// Constructor for making Ostrich
function Ostrich() { 
    // Set every Ostrich to have long legs 
}

// Tell JS that the Ostriches inherit every property and method of a Bird
Ostrich.prototype = new Bird();

// Create a new Ostrich object called "harry"
var harry = new Ostrich;

// Harry will flap his wings (well...in the console)
harry.flap();