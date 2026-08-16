

// fetch('todos/1.json')
// .then( (response) => {
//     console.log('resolved: ', response);
//     return response.json();
// })
// .then( (data) => {
//     console.log('data: ', data);
// })
// .catch( (err) => {
//     console.log('rejected: ', err);
// });


const getTodos = async (resource) => {
    const response = await fetch(resource);
    const data = await response.json();

    return data;
};

getTodos('todos/1.json')
    .then( (data) => {
        console.log('resolved: ', data);
    })
    .catch( (err) => {
        console.log('rejected: ', err);
    });   