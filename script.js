
// function greet(name) {
//     return `Hello, ${name}! Welcome to JavaScript programming.`;
// }

// function writee(name){
//     document.write(greet(name));
// }

// document.getElementById("th").innerHTML = "This is a html injection paragraph";

// document.getElementById("title").innerHTML = "title changed";

// document.getElementById("button").onclick = function() {
//     var name = prompt("Please enter your name:");
//     if(name == null || name.trim() === "") {
//         alert("Name cannot be empty. Please enter your name.");
//     } else {
//         writee(name);
//     }
// }


// var totalCost = prompt("Please enter the total cost of food");
// var numPeople = prompt("Please enter the number of people sharing the cost");
// if (isNaN(totalCost) || isNaN(numPeople) || totalCost <= 0 || numPeople <= 0) {
//     alert("Please enter valid positive numbers for total cost and number of people.");
// } else {
//     totalCost = parseFloat(totalCost);
//     numPeople = parseInt(numPeople);
// }
// document.write("The total cost of food was $", totalCost, "<br>");
// document.write("Each one of you has to pay $", (totalCost/8).toPrecision(4), "<br>");
// document.write("Each one of you has to pay $", (totalCost/numPeople).toFixed(2), "<br>");


// document.write("Pi : ", Math.acos(-1), "<br>");

console.log("Pi : ", Math.acos(-1), "\n");