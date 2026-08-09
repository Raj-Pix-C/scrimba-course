const btnEl = document.querySelector("#btn");

let data = [
    {
        player: "Jane",
        score: 100
    },
    {
        player: "John",
        score: 80
    }
];

btnEl.addEventListener("click", () => {
    const janeScore = data[0].score++;
    console.log(janeScore);
    
});

const imgs = [
    "dream-square-resort.jpg",
    "dream-square-resort2.jpeg",
    "gazipur-cover.webp"
];
const imgContEl = document.querySelector("#image-container");
function renderImg(images) {
    let DOMStr = "";

    for(img of images) {
        DOMStr += `<img src="${img}" alt="${img}">`; 
    }

    imgContEl.innerHTML = DOMStr;
}

renderImg(imgs);