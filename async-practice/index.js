/**
 * readyState = 0 ==>> open("", "");
 * readyState = 1 ==>> send();
 * readyState = 2 ==>> downloading // partial
 * readyState = 3 ==>> done // full data if status == 200 // ok code
 */





const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.open('GET', resource);
    request.send();

    request.addEventListener('readystatechange', () => {

        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if(request.readyState === 4){
            callback('could not fetch data', undefined);
        }

    });
};






getTodos( "todos/1.json", (err, data) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    }
    if(data){
        console.log(data);
    }

   getTodos( "todos/2.json", (err, data) => {
        console.log('callback fired');
        if(err){
            console.log(err);
        }
        if(data){
            console.log(data);
        }

       getTodos( "todos/3.json", (err, data) => {
            console.log('callback fired');
            if(err){
                console.log(err);
            }
            if(data){
                console.log(data);
            }
       });
   }); 
});

// example of callback hell //