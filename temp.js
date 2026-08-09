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

const buyBtnEl = document.querySelector("#buy-btn");
const price = "123.4567890";
let num = Number(price);
buyBtnEl.textContent = `Buy Now for $${num.toFixed(2)}`;
buyBtnEl.style.backgroundColor = "green";
buyBtnEl.addEventListener("dblclick", () => {
    alert("Thank you for your purchase!");
});