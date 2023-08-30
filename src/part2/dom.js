
// Accéder à un élément du DOM
const p = document.getElementById("text") // avec ID (1 seul elmt)
console.log(p);

const p2 = document.getElementsByClassName("hehe") // HTML Collection
console.log(p2); // renvoi un tableau (HTML Collection)

const lis = document.getElementsByTagName('li')
console.log(lis);

const p3 = document.querySelector("#text"); // 
console.log(p3); // renvoi un seul élément 

const liste = document.querySelectorAll("li"); // nodeList
console.log(liste);


// Attention NodeList n'est pas un tableaux
liste.forEach((li) => {
    console.log(li)
})
const array = Array.from(liste) // Cast en Array
const filteredLi = array.filter((li) => {
    return li.textContent.includes("attributs")
})

console.log(filteredLi);

// Modifier des élément du DOM

// modifier les attributs
p.setAttribute("class", "text-red-700")
// modifier le texte
p.textContent = "To be continued..."
// modifier un style
p.style.fontWeight = "bold"
p.style.fontSize = '2rem'
// ajouter un class
p.classList.add("bg-red-50")
p.classList.remove("text-red-700")
// Modifier le contenu HTML : Attention au faille XSS
//p.innerHTML = `<span>Hello word</span>`

// créer un élément 
const span = document.createElement("span") // creation balise span
span.textContent = "I am " 
p.appendChild(span)
const span2 = document.createElement("span")
span2.textContent = " The one"
p.insertBefore(span2, span)
// supprimer un élément 
p.removeChild(span2)
// remplacer un élément 
p.replaceChild(span2, span)
// cloner un élément 
const clone = p.cloneNode() // shallow 
const clone2 = p.cloneNode(true) // deep
console.log(clone);




















