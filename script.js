let count = 0;
let count_var = document.getElementById("counter")
count_var.innerText = count;


function increment() {
    count++;
    count_var.innerText = count;
}

function save(){
    console.log("Saved Count: " + count);
}