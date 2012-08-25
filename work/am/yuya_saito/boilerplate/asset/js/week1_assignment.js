//1
var day = "Monday";

//2
console.log(day);

//3
var getDay = function(){
  return "Friday";
};

//4
var setDay = function(){
  var day = "Friday";
  return day;
};

day = setDay();
alert(day);

//5
var people = ["Bob", "Sally", "John"];

//6
//A. John
console.log(people[2]);

//7
var anchor = document.getElementById("myAnchor");
anchor.style.cssText = 'background-color: red;';

//8
//for
//those
//loop
//eachOne
//A.for 

//9
document.getElementById("idname");

//10
var box = document.getElementById("box");
box.addEventListener('click',function(){
	box.style.cssText = "background-color: green;";
});


