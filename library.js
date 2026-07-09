const myLibrary = [];

function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.id = id;
}

function addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read, crypto.randomUUID());
    myLibrary.push(newBook);
}

function displayLibrary(){
    for(book of myLibrary){
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
        bookCard.appendChild(text);

        document.body.appendChild(bookCard);
    }
}

addBookToLibrary("book title", "ryan", 999, true);
addBookToLibrary("another book", "john", 250, false);
displayLibrary();