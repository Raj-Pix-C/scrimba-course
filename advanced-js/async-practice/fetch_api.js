const todoResource = ['todos/1.json', 'todos/2.json', 'todos/3.json', 'todos/4.json', 'https://jsonplaceholder.typicode.com/todos/4'];

const getTodos = async (resource) => {
    const response = await fetch(resource);
    
    if(response.status !== 200) {
        throw new Error('could not fetch data');
    }
    
    const data = await response.json();
    return data;
};


const getAllTodos = () => {
    for(const res of todoResource) {
        getTodos(res)
            .then( (data) => {
                console.log('resolved: ', data);
            })
            .catch( (err) => {
                console.log('rejected: ', err);
            });
    }
}

getAllTodos();