/*
	Below is a small script which generates random adventures. There are two
	problems which are marked below with "TODO". Your assignment is to solve
	those TODOs and get this script really up to snuff.
*/

var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid"
];

var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace"
];

var actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to"
];

//var heroGender = Math.random() > 0.5 ? "hero" : "heroine";
//use the variable as the function


//to change the gender with every new adventure, make the var a function. Thanks, Connor!

function heroGender() {

    return Math.random() > 0.5 ? "hero" : "heroine";
}

/*
	TODO: The following three lines of code have a lot of repetition and are
	ripe for turning into a function! Create a function to handle choosing
	a random element from an array instead of doing the math each time.
    
    
    //need to randomly select an element from the various variables (actions, weapons, monsters)
    //each element is in a position within the index variables
    //the function needs to randomly pull things from each category. Each category is an index, and each "thing" is a number 0-3
    //Index Monsters, at 2 (alien mothership)----how do I get here?
    //view each var as an array
        
*/


var chosenMonster = monsters[Math.floor(Math.random() * monsters.length)];
var chosenWeapon = weapons[Math.floor(Math.random() * weapons.length)];
var chosenAction = actions[Math.floor(Math.random() * actions.length)];


var chosenAction
var chosenMonster
var chosenWeapon


function choose(arr) {
    var index = Math.floor(Math.random() * arr.length); //get some number between 0 and the length of the array

    return arr[index] //grab the element at that number and return it

}

function ref() {
    var output = "Armed with only their " +
        choose(weapons) + //weapons is now the array we are choosing from, so replace arr with weapons
        " our " +
        heroGender() + //don't forget to put the () after the function name! It is necessary for it to be recognized as a function and not just a variable.
        " " +
        choose(actions) + //choose a random number from the array actions between 0 and up to 3
        " the evil " +
        choose(monsters) + //choose a random number from monsters array
        "!";

    document.getElementById("adventure").innerText = output;
}


/*
	TODO: Right now the "new adventure!" button doesn't work. Create a function
	to bind to that button so that the user can create a new adventure without
	refreshing the page.
*/

document.getElementById("new_adventure").onclick = ref; //make sure to move this outside the function and change the ("-") to the button name in HTML, and make sure to make it .onclick. Thanks, Connor!


/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/