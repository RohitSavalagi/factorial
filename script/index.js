let userInput;
const result = document.createElement('div');

do{
    userInput = parseInt(prompt("Enter a number : "));
}while(userInput < 0 || isNaN(userInput) || userInput > 10475);

userInput = BigInt(userInput);

function fact(n){
     return n < 1n ? 1n : n * fact(n - 1n);
}

result.innerText = `${userInput}! = ${fact(userInput)}`;
document.querySelector("body").appendChild(result);