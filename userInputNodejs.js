const ps = require("prompt-sync");//({ sigint: true });
const prompt = ps({ sigint: true });

let name = prompt("Enter your name: ");
console.log(name);
