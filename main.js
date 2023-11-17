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
};

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render()
}


function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let color = document.querySelector('#book-color').value;
    let textColor = document.querySelector('#text-color').value;
    let height = document.querySelector('#height').value;
    let width = document.querySelector('#width').value;
    let fontSelect = getSelectValue();

    let newBook = new Book(title, author, pages, read, color, textColor, height, width, fontSelect);
    myLibrary.push(newBook);

    console.log(myLibrary);

    render();
}

function getSelectValue(){
    let selectedValue = document.querySelector('#font-select').value;
    console.log(selectedValue);
    return selectedValue;
  }

let newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', form);

let newBookForm = document.querySelector('#book-form');
function form() {
    newBookForm.style.display = "block";
}

// let addBookBtn = document.querySelector('#add-book-btn');
newBookForm.addEventListener('submit', submitBook);

function submitBook(event){
    console.log('submit AKA add book button pressed');
    event.preventDefault();
    addBookToLibrary();
}

function render(){
    let libraryEntries = document.querySelector('#library-text');
    libraryEntries.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookText = document.createElement("div");
        bookText.innerHTML =  `<div class="card-entry">
                                ${book.title}
                                ${book.author}
                                ${book.pages}
                                <br>
                                ${book.read ? "read" : "not read"}
                                <button id="read-toggle-btn" onclick="toggleRead(${i})">Read</button> 
                                <button id="remove-book-btn" onclick="removeBook(${i})">Remove</button> 
                                </div>`;
        libraryEntries.appendChild(bookText);    
    }
}
