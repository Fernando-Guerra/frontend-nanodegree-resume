// $("#main").append("Fernando Guerra");

 
/*This replace a string with other
[string].replace([old], [new])

var email = "fernando.cabezas@loyalfeel.com";
var newEmail = email.replace("loyalfeel", "cibersys");

console.log(email);
console.log(newEmail);

var awesomeThoughts = "My name in Fernando and I am AWESOME ";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

Selector of Jquery to show the results in the browser
$("#main").append(funThoughts);
*/

var formattedName = HTMLheaderName.replace("%data%", "Fernando Cabezas");
var formattedRole = HTMLheaderRole.replace("%data%","Developer");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);