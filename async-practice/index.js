const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);

    if(request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    }
    else if(request.readyState === 4){
        console.log('could not fetch data');
    }
})

/**
 * readyState = 0 ==>> open("", "");
 * readyState = 1 ==>> send();
 * readyState = 2 ==>> downloading // partial
 * readyState = 3 ==>> done // full data if status == 200 // ok code
 */