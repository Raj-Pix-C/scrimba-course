

fetch('todos/1.json')
.then( (response) => {
    console.log('resolved: ', response);
    return response.json();
})
.then( (data) => {
    console.log('data: ', data);
})
.catch( (err) => {
    console.log('rejected: ', err);
});