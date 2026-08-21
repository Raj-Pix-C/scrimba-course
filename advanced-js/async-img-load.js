function getImagePromise(url) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const myImg = new Image(400);
            myImg.src = url;
            myImg.alt = 'some image';
            myImg.addEventListener('load', () => resolve(myImg));
            myImg.addEventListener('error', () => reject(new Error('img has not loaded')));
        }, 500);
    } );
}

const imageUrls = [
//     'https://scrimba.com/links/advancedjs-resources-images-scenic1.jpg',
//     'https://scrimba.com/links/advancedjs-resources-images-scenic2.jpg',
//     'https://scrimba.com/links/advancedjs-resources-images-scenic3.jpg'
    'https://img.icons8.com/ios/50/bmo.png','https://img.icons8.com/ios/50/finn--v1.png'
 ];

async function preloadImages(urls) {
    const container = document.querySelector('#container');
    const uploadContainer = document.querySelector('#upload-container');

    try{
        const responses = await Promise.all(urls.map(url => getImagePromise(url)));
        
        if(responses && container) {
            console.log(responses);
            responses.forEach(img => container.appendChild(img));
        } else if (!container) {
            console.error("Element with id 'container' was not found.");
        }
    }
    catch (err){
        console.error(err);
    }

}

document.querySelector('#submit').addEventListener('click', () => preloadImages(imageUrls));