//3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(ages.hasOwnProperty("Spot")); 

//4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let newDS = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();
console.log(newDS)

//10
let advice = "Few things in life are as important as house training your pet dinosaur.";

let stop = advice.indexOf('house'); 
console.log(advice.slice(0,stop))

// Expected return value:
// => 'Few things in life are as important as '

