//To show popupoverlay and popupbox
var popupoverlay= document.querySelector(".popup-overlay")
var popupbox= document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


//To cancel popup
var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


//Add new Book
var container = document.querySelector(".container") 
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")


addbook.addEventListener("click",function(event){
    event.preventDefault()

    if (booktitleinput.value.trim() === '' || bookauthorinput.value.trim() === '' || bookdescriptioninput.value.trim() === '') {
        alert("Please fill out all fields.");
        return;
    }

    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${booktitleinput.value}</h2>
                    <h3>${bookauthorinput.value}</h3>
                    <p>${bookdescriptioninput.value}</p>
                    <button onclick="deletebtn(event)">Delete</button>`
    container.append(div)

    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//Delete book
function deletebtn(event){
    event.target.parentElement.remove()
}
