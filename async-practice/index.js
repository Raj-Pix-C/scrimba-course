/**
 * readyState = 0 ==>> open("", "");
 * readyState = 1 ==>> send();
 * readyState = 2 ==>> downloading // partial
 * readyState = 3 ==>> done // full data if status == 200 // ok code
 */





const getTodos = (resource, callback) => {

    return new Promise ( (resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4){
                reject('could not fetch data', request.status);
            }
        });

        request.open('GET', resource);
        request.send();
    });


};



// this is promise chaining. //

getTodos('todos/1.json')
.then( (data1) => {
    console.log('promise 1 resolved:', data1);

    return  getTodos('todos/2.json');
})
.then( (data2) => {
    console.log('promise 2 resolved:', data2);

    return  getTodos('todos/3.json');
})
.then( (data3) => {
    console.log('promise 3 resolved:', data3);

    return  getTodos('todos/4.json');
})
.then( (data4) => {
    console.log('promise 4 resolved:', data4);

    return  getTodos('https://jsonplaceholder.typicode.com/todos/4');
})
.then( (data4) => {
    console.log('promise 4 resolved from remote:', data4);
})
.catch( (errMsg, requestStatus) => {
    console.log(`promise rejected: ${errMsg}, request status: ${requestStatus}`);
});



// getTodos('https://jsonplaceholder.typicode.com/todos/4').then( (data) => {
//     console.log('promise resolved:', data);
// }).catch( (errMsg, requestStatus) => {
//     console.log(`promise rejected: ${errMsg}, request status: ${requestStatus}`);
// });