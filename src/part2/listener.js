

/* code non bloquant 
window.addEventListener("load", function() {
    console.log("load");
})
window.addEventListener("DOMContentLoaded", function() {
    console.log("Dom loaded");
    // code bloquant
    console.log("hehehe");
    const btnElement = document.getElementById("btn")
    const playgroundElement = document.getElementById("playground")

   function handleClick() {
    console.log("heheheh");
    const pElement = document.createElement("p")
    pElement.classList.add('text-2xl', 'text-center', 'text-red-800', "my-2")
    pElement.textContent = "Le roi des pirates ça sera moi"

    playgroundElement.appendChild(pElement)
     // Memory leak (fuite mémoire)
    // GARBAGE COLLECTOR
    btnElement.removeEventListener("click", handleClick )
    }
 
    btnElement.addEventListener("click", handleClick)

}) // par tout de suite dans le Callback queue
*/

// avec Defer, le script est executé en déférer donc seulement 
//lorsque le DOM est chargé 
console.log("Dom loaded");
// code bloquant
console.log("hehehe");
const btnElement = document.getElementById("btn")
const playgroundElement = document.getElementById("playground")

function handleClick() {
console.log("heheheh");
const pElement = document.createElement("p")
pElement.classList.add('text-2xl', 'text-center', 'text-red-800', "my-2")
pElement.textContent = "Le roi des pirates ça sera moi"

playgroundElement.appendChild(pElement)
 // Memory leak (fuite mémoire)
 // GARBAGE COLLECTOR
btnElement.removeEventListener("click", handleClick )
}

btnElement.addEventListener("click", handleClick)









