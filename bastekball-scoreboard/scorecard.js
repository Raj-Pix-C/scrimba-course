let homescr = document.getElementById("home-score");
let awayscr = document.getElementById("away-score");

let hmPlus1 = document.getElementById("plus1");
let hmPlus2 = document.getElementById("plus2");
let hmPlus3 = document.getElementById("plus3");

let awayPlus1 = document.getElementById("away-plus1");
let awayPlus2 = document.getElementById("away-plus2");
let awayPlus3 = document.getElementById("away-plus3");

let resetBtn = document.getElementById("reset");


function add1(view) {
    view.textContent = parseInt(view.textContent) + 1;
}
function add2(view) {
    view.textContent = parseInt(view.textContent) + 2;
}
function add3(view) {
    view.textContent = parseInt(view.textContent) + 3;
}
function reset(){
    homescr.textContent = 0;
    awayscr.textContent = 0;
}


hmPlus1.addEventListener("click", () => add1(homescr));
hmPlus2.addEventListener("click", () => add2(homescr));
hmPlus3.addEventListener("click", () => add3(homescr));


awayPlus1.addEventListener("click", () => add1(awayscr));
awayPlus2.addEventListener("click", () => add2(awayscr));
awayPlus3.addEventListener("click", () => add3(awayscr));


resetBtn.addEventListener("click", () => reset());