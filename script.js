let myLibrary = [];

function Book (title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


let addBookButton = document.querySelector('#add-book');
let submitBookButton = document.querySelector('#submit-book')

let openForm = (e) => {
    let form = document.querySelector('.form-window');
    form.style.display='block';
};

let closeForm = (e) => {
    let form = document.querySelector('.form-window');
    form.style.display='none';
};

let addBook = (e) => {
    console.log(e);
}

addBookButton.addEventListener('click', openForm);

submitBookButton.addEventListener('click', (e) => {
    console.log(e);
    addBook(e);
    closeForm(e);
});