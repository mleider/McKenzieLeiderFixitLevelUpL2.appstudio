/*
//defined variables so that a persons name and state they live in can be entered
let firstName = prompt("Enter your first name:") 
let stateName = prompt("Enter the abbreviation of the state you are from:")  

//This capatilizes the abrivated states if it is not entered with capitals
let string = stateName
let result = string.toUpperCase()

//Asks user for the current temp. of the state they live in. 
let stateTemp = Number(prompt("Enter the current temperature of your state in Fahrenheit:")) 

// This generates an array with the messages that will be displayed based on the state and temp. a user enters
let responses = ["Wear a warm coat, hat, scarf and gloves.", "Wear a warm coat but you won't need a hat, scarf or gloves.", "Wear a less heavy coat .", "Wear a light jacket and smile!", "Have a good day!"]

//This capitlizes the first letter of a first name when it is entered
let nameUpper = firstName.charAt(0).toUpperCase()+firstName.slice(1)

//This if else statement determines based on the state and temp. what message will appear to the user
//The message box pulls the correct response from the array that is needed based on the information that the user enteres and displays the message to the user
if (result == "NE" && stateTemp < 32) {
  NSB.MsgBox(`${nameUpper}, ${responses[0]}`);
} else if (result == "NE" && stateTemp > 32 && stateTemp <= 50) {
   NSB.MsgBox(`${nameUpper}, ${responses[1]}`);
} else if (result == "FL" && stateTemp >= 32 && stateTemp <= 50) {
  NSB.MsgBox(`${nameUpper}, ${responses[2]}`);
} else if (result == "FL" && stateTemp >= 50 && stateTemp <= 70) {
   NSB.MsgBox(`${nameUpper}, ${responses[3]}`);
 } else {
   NSB.MsgBox(`${nameUpper}, ${responses[4]}`)
}
*/