async function uploadFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading file...');
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
async function processFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing file...');
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
async function notifyUser() {
    return new Promise((resolve, reject) => {
        console.log('Step 3: Notifying user...');
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}



try {
    await uploadFile();
    await processFile();
    await notifyUser();
}
catch (err) {
    console.error(err);
}