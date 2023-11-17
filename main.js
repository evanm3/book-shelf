const myLibrary = [];

function Book(title, author, pages, read, color, textColor, height, width, fontSelect) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.color = color;
    this.textColor = textColor;
    this.height = height;
    this.width = width;
    this.fontSelect = fontSelect;
}

Book.prototype.toggleRead = function() {
    this.read != this.read;
}

function addBookToLibrary() {
    this.title = document.querySelector('#title');
    this.author = document.querySelector('#author');
    this.pages = document.querySelector('#pages');
    this.read = document.querySelector('#read');
    this.color = document.querySelector('#color');
    this.textColor = document.querySelector('#text-color');
    this.height = document.querySelector('#height');
    this.width = document.querySelector('#width');
    this.fontSelect = document.querySelector('#font-select');
    let newBook = newBook(title, author, pages, read, color, textColor, height, width, fontSelect);
    myLibrary.push(newBook);
}

let newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', unhideForm);

let addBookBtn = document.querySelector('#add-book-btn');
addBookBtn.addEventListener('click', addBookToLibrary);

let newBookForm = document.querySelector('#book-form');
function unhideForm() {
    newBookForm.style.display = "block";
}

