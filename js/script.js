"use strict";


const quotes = ["jeg spiste", "jeg gik en tur", "jeg løb en tur", "jeg fløj en tur", "jeg sov en dag"]

const quotebtn  = document.getElementById("displayQuoteBtn");

 quotebtn.addEventListener("click", () => {
    displayRandomQuote()
})

function getRandomQuote(){

if(quotes.length == 0){
    return "no quotes available"
}


const RandomIndex = Math.floor(Math.random() * quotes.length);

return quotes[RandomIndex];

}


function displayRandomQuote(){
   const randomQuote = getRandomQuote()

   const quoteskald = document.getElementById("quotes");

   quoteskald.innerHTML = randomQuote
}


