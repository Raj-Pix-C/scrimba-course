/**
*    luxon is a library for working with dates and times in JavaScript.
*    It provides a simple and powerful API for 
*    parsing, formatting, and manipulating dates and times.
*/


const timeStamp = new Date();

console.log(timeStamp, typeof timeStamp.getUTCFullYear());

const codeEl = document.querySelector('.container');

codeEl.innerHTML = `
    <code>
        Copyright &copy; ${timeStamp.getFullYear().toString()} all rights reserved. 
    </code>
`