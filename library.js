const myLibrary = [];

function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.id = id;
}

function addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read, crypto.randomUUID);
    myLibrary.push(newBook);
}

function displayLibrary(){
    for(book of myLibrary){
        bookCard = document.createElement("div");
    }
}