/**
 * readyState = 0 ==>> open("", "");
 * readyState = 1 ==>> send();
 * readyState = 2 ==>> downloading // partial
 * readyState = 3 ==>> done // full data if status == 200 // ok code
 */





const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();

    request.addEventListener('readystatechange', () => {

        if(request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        }
        else if(request.readyState === 4){
            callback('could not fetch data', undefined);
        }

    });
};






getTodos( (err, data) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    }
    if(data){
        console.log(data);
    }
});