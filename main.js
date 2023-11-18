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

newBookForm.addEventListener('submit', submitBook);

function submitBook(event){
    event.preventDefault();
    addBookToLibrary();
}

function render(){
    let libraryEntries = document.querySelector('#library-text');
    libraryEntries.innerHTML = '';
    let librarySpines = document.querySelector('#library-spines');
    librarySpines.innerHTML = '';
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
        let bookSpine = document.createElement('div');
        bookSpine.innerHTML = `<div class="book-template" 
                                    style="height:${book.height}px;
                                        width:${book.width}px;
                                        background-color:${book.color};
                                        color:${book.textColor};
                                        font-family:${book.fontSelect};
                                        ">
                                    <div class="spine-text">
                                        ${book.title} 
                                        ${book.author}
                                    </div>
                                </div>
                                `;
        librarySpines.appendChild(bookSpine);
    }
}









/////DEFAULT BOOK SECTION
let graphicNovel = document.querySelector('.graphic-novel');
graphicNovel.addEventListener('click', graphicNovelDefaults);

function graphicNovelDefaults() {
  document.querySelector('#height').value = 204;
  document.querySelector('#width').value = 18;
  document.querySelector('#book-color').value = "#ffa500";
  document.querySelector('#text-color').value = "#000000";
  return;
}

let paperBack = document.querySelector('.paperback');
paperBack.addEventListener('click', paperBackDefaults);

function paperBackDefaults() {
  document.querySelector('#height').value = 160;
  document.querySelector('#width').value = 20;
  document.querySelector('#book-color').value = "#eedbb8";
  document.querySelector('#text-color').value = "#000000";
  return;
}

let omnibus = document.querySelector('.omnibus');
omnibus.addEventListener('click', omnibusDefaults);

function omnibusDefaults() {
  document.querySelector('#height').value = 222;
  document.querySelector('#width').value = 43;
  document.querySelector('#book-color').value = "#16191a";
  document.querySelector('#text-color').value = "#f5f5f5";
  return;
}

let coffeeTable = document.querySelector('.coffee-table');
coffeeTable.addEventListener('click', coffeeTableDefaults);

function coffeeTableDefaults() {
  document.querySelector('#height').value = 214;
  document.querySelector('#width').value = 24;
  document.querySelector('#book-color').value = "#13e6e6";
  document.querySelector('#text-color').value = "#000000";
  return;
}

let comicIssue = document.querySelector('.comic-issue');
comicIssue.addEventListener('click', comicIssueDefaults);

function comicIssueDefaults() {
  document.querySelector('#height').value = 201;
  document.querySelector('#width').value = 1;
  document.querySelector('#book-color').value = "#ffffff";
  document.querySelector('#text-color').value = "#000000";
  return;
}


let artBook = document.querySelector('.art-book');
artBook.addEventListener('click', artBookDefaults);

function artBookDefaults() {
  document.querySelector('#height').value = 260;
  document.querySelector('#width').value = 20;
  document.querySelector('#book-color').value = "#9a1ccc";
  document.querySelector('#text-color').value = "#000000";
  return;
}

let hardcover = document.querySelector('.hardcover');
hardcover.addEventListener('click', hardcoverDefaults);

function hardcoverDefaults() {
  document.querySelector('#height').value = 205;
  document.querySelector('#width').value = 29;
  document.querySelector('#book-color').value = "#c9230d";
  document.querySelector('#text-color').value = "#000000";
  return;
}