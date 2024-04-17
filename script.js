let myLibrary = [{author:"jeff", title: "song", pages: 3, read: true}];

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
        const btn = document.createElement("button");
        const btn2 = document.createElement("button");

        author.textContent = `Author: ${books[i].author}`;
        title.textContent = `Title: ${books[i].title}`;
        pages.textContent = `pages: ${books[i].pages}`;
        read.textContent = `read: ${books[i].read}`
        btn.textContent = 'Delete';
        btn2.textContent = 'Read'
        card.setAttribute("id", `${i}`)
        btn.setAttribute("onClick", `deleteBook("${books[i].title.toLowerCase()}")`)
        btn2.setAttribute("onClick", `readBook("${i}")`)

        libraryBody.appendChild(card)
        card.appendChild(author)
        card.appendChild(title)
        card.appendChild(pages)
        card.appendChild(read)
        card.appendChild(btn)
        card.appendChild(btn2)
        console.log(books[i])
    }
}

displayBooks(myLibrary)

function deleteBook(itemId){
   myLibrary = myLibrary.filter(item => item.title !== itemId )
     console.log(myLibrary)
}


const container = document.getElementById("container");

function newBook(){
    container.style.display = container.style.display === "none" ? "block" : "none";
}

const submitButton = document.querySelector('#submit');

submitButton.addEventListener("click", submit, false)

function submitBook(){
    let obj = {};
    obj.author = document.getElementById("author").value;
    obj.title = document.getElementById("title").value;
    const numberOfPages = document.getElementById("pages").value;
    obj.pages = Number(numberOfPages)
    const readBook = document.querySelector('input[name="read"]:checked').value;
    obj.read = Boolean(readBook)
 myLibrary.push(obj)
 displayBooks(myLibrary)
 console.log(myLibrary)
}