
let popupoverlay = document.querySelector(".popup-overlay")
let popupbox = document.querySelector(".popup-box")
let addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

let cancelbutton=document.getElementById("cancel-button")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

let container= document.querySelector(".container")
let addbook= document.getElementById("add-button")
let booktitle= document.getElementById("book-title-input")
let bookauthor= document.getElementById("book-author-input")
let bookdiscription= document.getElementById("book-discription-input")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    let div= document.createElement("div")
    div.setAttribute("class","list-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
  <h3>${bookauthor.value}</h3>
  <p>${bookdiscription.value}</p>
  <button onclick="deletebook(event)">Delete</button>`
  container.append(div)   
    popupoverlay.style.display="none"
    popupbox.style.display="none" 
})

function deletebook(event){
    event.target.parentElement.remove()
}