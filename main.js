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
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.color = color;
    this.textColor = textColor;
    this.height = height;
    this.width = width;
    this.fontSelect = fontSelect;
    let newBook = newBook(title, author, pages, read, color, textColor, height, width, fontSelect);
    myLibrary.push(newBook);
}