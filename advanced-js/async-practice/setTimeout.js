// 🔴
// 🟢
// 🟡

const resetBtnEl = document.getElementById('resetBtn');



function displayTrafficLight(light){
    // console.clear();
    console.log(light);
}


displayTrafficLight('🟢');
// setTimeout(displayTrafficLight, 1000, '🔴');
// setTimeout(displayTrafficLight, 2000, '🟡');
// setTimeout(displayTrafficLight, 3000, '🟢');

const trafficlight = setTimeout( () => {
    displayTrafficLight('🔴');
    setTimeout( () => {
        displayTrafficLight('🟡');
        setTimeout( () => {
            displayTrafficLight('🟢');
        }, 1000);
    }, 1000);
}, 4000);

const logAnswer = (answer, point) => {
    console.log(`The answer is ${answer} and you get ${point} points.`);
}

console.log(`what is the capital of Bangladesh?`);
const answerTimeout = setTimeout(logAnswer, 3000, 'Dhaka', 10);


resetBtnEl.addEventListener('click', () => {
    clearTimeout(answerTimeout);
    console.log('answer timeout fn cleared');
});