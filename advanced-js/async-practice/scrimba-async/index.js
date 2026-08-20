// const getActivity = async (url) => {
//     try {
//         const response = await fetch(url);

//         if(!response.ok){
//             throw new Error(`${response.status} ${response.statusText}`);
//         }

//         const data = await response.json();
//         console.log(data);
//     }
//     catch (err) {
//         console.log('rejected: ', err);
//         // throw new Error('could not fetch data');
//     }
//     finally {
//         console.log('finished.');
//     }
// }

// getActivity('https://apis.scrimba.com/bored/api/activity/');








// start //

const myHeader = new Headers();
myHeader.append("Content-Type", "application/json");

const postingData = {
    title: "Holiday Nightmares",body: "When I was a kidnapper in Scotland...",userId: 2302017
};


const manipulateData = async (url, methodd) => {

    try{
        let data;
        if(methodd === 'GET'){

            const response = await fetch(url, {
                'method': methodd
            });
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            data = await response.json();
        }
        else if (methodd === 'POST' || methodd === 'PUT'){

            const response = await fetch(url, {
                method: methodd,
                headers : myHeader,
                body: JSON.stringify(postingData)
                
            });
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            data = await response.json();
        }        
        
        if(data.length > 1){

            data.forEach(obj => {
                console.log(obj);
            });

        }        
        else {

            console.log(data);

        }
            

    }
    catch (err) {
        
        console.error(err);

    }
    finally{

        console.log("request complete");

    }
}




manipulateData('https://jsonplaceholder.typicode.com/posts', 'GET');  // request

// manipulateData('https://jsonplaceholder.typicode.com/posts', 'POST'); // upload

// manipulateData('https://jsonplaceholder.typicode.com/posts/1', 'PUT');  // edit
