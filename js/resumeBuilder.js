// $("#main").append("Fernando Guerra");

 
/*String y su Comportamiento
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

/* String y su Comportamiento

var formattedName = HTMLheaderName.replace("%data%", "Fernando Cabezas");
var formattedRole = HTMLheaderRole.replace("%data%","Developer");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);*/

/*Arrays y su Comportamiento

var skills = ["Programming ", "Database ", "Robotics "];

$("#main").append(skills);

$("#main").append(skills[0]);

$("#main").append(skills.length);*/

/* Objetos y su Comportamiento

var bio = {
	"name" : "Fernando Cabezas",
	"role" : "Developer",
	"contacts" : {
		"mobile" : "04268122721",
		"email" : "fernando_theotaku@hotmail.com",
		"github" : "Fernando-Guerra",
		"twitter" : "@itachi_guerra",
		"location" : "Caracas"
	},
	"welcomeMessage" : "Bienvenido a mi Curriculum",
	"skills" : [
		"Programming ", "Database ", "Robotics "
	],
	"bioPic" : "images/fernando.jpg"
};

bio.city = "Catia";

$("#main").append(bio.city); hasta aqui va el primero

var work = {};

work.jobPosition = "technical support";
work.employer = "Cibersys";
work.yearsWorked = "2 Months";
work.city = "Caracas";

var education = {};

education["lastSchool"] = "IUJO";
education["yearsSchool"] = "3 years";
education["citySchool"] = "Caracas";

$("#main").append(work["jobPosition"]);
$("#main").append(education.lastSchool);

*/

/*Mi primer JSON

var education = {
	"schools": [
		{
			"name": "Miguel Antonio Caro",
			"location": "Caracas",
			"degree": "Bachiller en Procesamiento de Datos",
			"majors": ["Ciencias basicas", "Computacion"],
			"dates": 2009,
			"url": "www.miguelantonio.com"
		},
		{
			"name": "Instituto Universitario Jesus Obrero",
			"location": "Caracas",
			"degree": "T.S.U. en Informatica",
			"majors": ["Informatica"],
			"dates": 2012,
			"url": "www.iujo.com"
		}
	],
	
	"onlineCourses":[
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud804/l-1930528550/e-1950678559/m-1936858588"
		}
	]
}
*/

var bio = {
	"name": "Fernando Cabezas",
	"role": "Developer",
	"contacts": {
		"mobile": "04268122721",
		"email": "Fernando_theotaku@hotmail.com",
		"github": "Fernando_Guerra",
		"twitter": "@itachi_guerra",
		"location": "Caracas"
	},
	"welcomeMessage": "Curriculum de Fernando",
	"skills": [
		"programing", "database", "electronics"
	],
	"bioPic": "images/fernando.jpg"
}

var education = {
	"schools": [
		{
			"name": "Miguel Antonio Caro",
			"location": "Caracas",
			"degree": "Bachiller en Procesamiento de Datos",
			"majors": ["Ciencias basicas", "Computacion"],
			"dates": 2009,
			"url": "www.miguelantonio.com" 
		},
		{
			"name": "Instituto Universitario Jesus Obrero",
			"location": "Caracas",
			"degree": "T.S.U. en Informatica",
			"majors": ["Informatica"],
			"dates": 2012,
			"url": "www.iujo.com"
		}
	],
	
	"onlineCourses":[
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud804/l-1930528550/e-1950678559/m-1936858588"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Loyalfeel",
			"title": "Analista Integral de Sistemas",
			"dates": "Marzo 2014 - Diciembre 2014",
			"description": "Encargado de todas las areas de Informatica"
		},
		{
			"employer": "Cibersys",
			"title": "Analista Programador",
			"dates": "Enero 2015 - Presente",
			"description": "Programacion para crear nuevas soluciones de Comunicaciones"			
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Giroscopo",
			"dates": "2013",
			"descripcion": "Crear maquina voladora con nuevos diseños basados en los diseños del gran Ibrahim Lopez Garcia",
			"images":[
				"http://tatuy.net/web/wp-content/uploads/2012/03/nave-ibrahim2.jpg",
				"http://1.bp.blogspot.com/-xgcXaUV2Cyk/UHxyg_4mEaI/AAAAAAAAAH0/MHxqKL74WNs/s1600/kkk0000ta7.jpg"
			]
		}
	]
}

console.log(bio);
console.log(education);
console.log(work);
console.log(projects);