const myLibrary = [];
const DISPLAY = document.querySelector(".books-display");
const ADD_BTN = document.querySelector("#new");

class Book{
    #title;
    #author;
    #pages;
    #read;
    #id;

    constructor(title, author, pages, read, id){
        this.#title = title;
        this.#author = author;
        this.#pages = pages;
        this.#read = read;
        this.#id = id;
    }

    get title(){
        return this.#title;
    }
    get author(){
        return this.#author;
    }
    get pages(){
        return this.#pages;
    }
    get read(){
        return this.#read;
    }
    get id(){
        return this.#id;
    }

    set read(read){
        this.#read = read;
    }

    changeReadStatus(event){
        let bookCard = event.target.parentElement;
        
        let book = myLibrary.find(item => item.id === bookCard.id);
        book.read = !book.read;
        let readStatus = bookCard.querySelector('.read-status');
        readStatus.textContent = "Read?: "
        if(book.read){
            readStatus.textContent += "✔️";
        }
        else{
            readStatus.textContent += "❌";
        }
    }
}

function addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read, crypto.randomUUID());
    myLibrary.push(newBook);
}

function displayLibrary(){
    for(book of myLibrary){
        displayBook(book);
    }
}

function displayBook(book){
    let bookCard = document.createElement("div");
    bookCard.className = "book-card";

    let text = document.createElement("h1")
    text.textContent = book.title;
    bookCard.appendChild(text);

    text = document.createElement("h2");
    text.textContent = "by, " + book.author;
    bookCard.appendChild(text);

    text = document.createElement("p");
    text.textContent = book.pages + " pages.";
    bookCard.appendChild(text);

    text = document.createElement("p");
    text.className = "read-status";
    text.textContent = "Read?: ";
    if(book.read){
        text.textContent += "✔️";
    }
    else{
        text.textContent += "❌";
    }
    bookCard.appendChild(text);

    text = document.createElement("p");
    text.textContent = "UUID: " + book.id;
    text.className = "unique-id";
    bookCard.id = book.id;
    bookCard.appendChild(text);

    let removeBtn = document.createElement("button");
    removeBtn.addEventListener('click', removeBook);
    removeBtn.textContent = "Remove";
    bookCard.appendChild(removeBtn);

    let changeBtn = document.createElement("button");
    changeBtn.addEventListener('click', book.changeReadStatus);
    changeBtn.textContent = "Change Read Status";
    bookCard.appendChild(changeBtn);

    DISPLAY.appendChild(bookCard);
}

function removeBook(event){
    let book = event.target.parentElement;
    let removeID = book.id;
    let removeIDX = myLibrary.indexOf(myLibrary.find(item => item.id === removeID));
    myLibrary.splice(removeIDX, 1);

    book.remove();

    for(books of myLibrary){
        console.log(books.title);
    }
}

function processForm(event){
    event.preventDefault();
    let form = event.target.form;

    addBookToLibrary(form.elements.title.value, form.elements.author.value, form.elements.pages.value, form.elements.read.checked);
    displayBook(myLibrary.at(-1));
}

ADD_BTN.addEventListener('click', processForm);

addBookToLibrary("book title", "ryan", 999, true);
addBookToLibrary("another book", "john", 250, false);

displayLibrary();