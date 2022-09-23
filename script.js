let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

let openForm = (e) => {
    // let form = document.querySelector('.form-window');
    formWindow.style.display = 'block';
    formBackdrop.style.display = 'block';
};

let closeForm = (e) => {
    // let form = document.querySelector('.form-window');
    formWindow.style.display = 'none';
    formBackdrop.style.display = 'none';
};

let addBook = (e) => {
    console.log(e);
}

let addBookButton = document.querySelector('#add-book');
let submitBookButton = document.querySelector('#submit-book');
let formWindow = document.querySelector('.form-window');
let formBackdrop = document.querySelector('.form-backdrop');

addBookButton.addEventListener('click', openForm);

window.addEventListener('click', (e) => {
    // console.log(e.target);
    console.log(formWindow.style.display);
    let clickInside = formWindow.contains(e.target) || addBookButton.contains(e.target);
    if (!clickInside) closeForm()
});

// submitBookButton.addEventListener('click', (e) => {
//     console.log(e);
//     addBook(e);
//     closeForm(e);
// });