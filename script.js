const myLibrary = ['john', 'jacob', 'jingle'];

function Book() {
  
}

function addBookToLibrary() {
  // do stuff here
}

const libraryBody = document.querySelector('body');




function displayBooks(books){
    for( let i = 0; i < books.length; i++){
        const card = document.createElement("div");
        card.textContent = books[i]
        libraryBody.appendChild(card)
        console.log(books[i])
    }
}

displayBooks(myLibrary)