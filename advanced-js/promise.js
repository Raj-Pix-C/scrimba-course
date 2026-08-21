
const promise = new Promise( (resolve, reject) => {
    const success = Math.random() >= 0.5;
    if(success) {resolve('operation successful');}
    else {reject('operation failed.');}
})

try{
    const response1 = await promise;
    const response2 = await promise;
    const response3 = await promise;

    const result = Promise.all([response1, response2, response3]);
    console.log(result);
    // console.log(response);
}catch (err){
    console.error(err);
}




// const container = document.querySelector('#container');

// const preloadImg = async (url) => {

//     const promise = new Promise( (resolve, reject) => {
        
//         const myImg = new Image(400);
//         myImg.src = url;
//         myImg.alt = 'some image';
        
//         myImg.addEventListener('load', () => resolve(myImg));

//         myImg.addEventListener('error', () => reject(new Error('img has not loaded')));
//     })
//     return promise;
// }


// try {
//     const response = await preloadImg(
//         'https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg'
//     );
//     console.log(response);
//     // if (response && container)
//         container.appendChild(response);
//     // else if (!container)
//     //     console.error("Element with id 'container' was not found.");
// }
// catch (err){
//     console.error(err);
// }