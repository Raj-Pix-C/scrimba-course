let count = 0;
let count_var = document.getElementById("counter");
let save_var = document.getElementById("prev-saves");
let print_msg = save_var.innerText;
let saved = false;

count_var.textContent = count;


function increment() {
    count++;
    count_var.textContent = count;
}

function save(){
    if(saved)
        print_msg += ' - ';
    else
        saved = true;

    print_msg += count;

    save_var.textContent = print_msg;

    reset();
}

function reset(){
    count = 0;
    count_var.textContent = count;
}

function errormsg(){
    // console.log("clicked");
    let error_catcher = document.getElementById("error");
    // console.log(error_catcher);
    error_catcher.textContent = 'Something went wrong, please try again later';
}