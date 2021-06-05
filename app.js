// Ques 1 

var q1Part1 = document.getElementById('main-content');


console.log(q1Part1.children);


var q1Part3 = document.getElementsByClassName('render');

document.write("<br>"+ "<br>"+ "<br>"+ "<br>" +"Below written data is from assignment, where it was asked to display all childs on browser" + "<br>" + "<br>" + "<br>" + "<br>")

for (i=0 ; i<q1Part3.length ; i++) {
    document.write(q1Part3[i].innerHTML + "<br>")
}


var q1Part4 = document.getElementById('first-name');

q1Part4.value = "Ali"


var q1Part5One = document.getElementById('last-name');

q1Part5One.value = " Osama"


var q1Part5Two = document.getElementById('email');

q1Part5Two.value = "xyz@gmail.com"


// Ques 2 

var q2Part1 = document.getElementById('form-content');

console.log(q2Part1.nodeType); 


var q2Part2 = document.getElementById('lastName');

console.log(q2Part2.nodeType);
console.log(q2Part2.childNodes);


q2Part2.childNodes[0].nodeValue = "Last Name : Osama";


console.log(q1Part1.lastElementChild);
console.log(q1Part1.firstElementChild);


console.log(q2Part2.nextElementSibling);
console.log(q2Part2.previousElementSibling);


console.log(q1Part5Two.parentNode)
console.log(q1Part5Two.parentNode.nodeType)