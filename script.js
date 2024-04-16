const myLibrary = [{author:"jeff", title: "song", pages: 3, read: true}];

function Book() {
  
}

function addBookToLibrary() {
  
}

const libraryBody = document.querySelector('body');


function displayBooks(books){
    for( let i = 0; i < books.length; i++){
        const card = document.createElement("div");
        const author = document.createElement("h3");
        const title = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p")
        const btn = document.createElement("button")

        author.textContent = `Author: ${books[i].author}`;
        title.textContent = `Title: ${books[i].title}`;
        pages.textContent = `pages: ${books[i].pages}`;
        read.textContent = `read: ${books[i].read}`
        btn.textContent = 'Delete';
        libraryBody.appendChild(card)
        card.appendChild(author)
        card.appendChild(title)
        card.appendChild(pages)
        card.appendChild(read)
        card.appendChild(btn)
        console.log(books[i])
    }
}

displayBooks(myLibrary)

const container = document.getElementById("container");

function newBook(){
    container.style.display = container.style.display === "none" ? "block" : "none";
}

const submitButton = document.querySelector('#submit');

submitButton.addEventListener("click", submit, false)

function submit(e){
    e.preventDefault()
    let obj = {};
    obj.author = document.getElementById("author").value;
    obj.title = document.getElementById("title").value;
    obj.pages = document.getElementById("pages").value;
    obj.read = document.querySelector('input[name="read"]:checked').value;

 myLibrary.push(obj)
 displayBooks(myLibrary)
 console.log(myLibrary)
}