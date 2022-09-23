// Functions ==================================================================

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

let openForm = (e) => {
    formWindow.style.display = 'block';
    formBackdrop.style.display = 'block';
};

let closeForm = (e) => {
    formWindow.style.display = 'none';
    formBackdrop.style.display = 'none';
};

let addBook = (e) => {
    console.log(e);
}

// Variables ==================================================================

let myLibrary = [];
let addBookButton = document.querySelector('#add-book');
let submitBookButton = document.querySelector('#submit-book');
let formWindow = document.querySelector('.form-window');
let formBackdrop = document.querySelector('.form-backdrop');

// Event Listeners ============================================================


// Open form when pressing plus button
addBookButton.addEventListener('click', openForm);

// Close form when clicking outside window
window.addEventListener('click', (e) => {
    let clickInside = formWindow.contains(e.target) || addBookButton.contains(e.target);
    if (!clickInside) closeForm()
});

// Submit book and close form when clicking submit in form
submitBookButton.addEventListener('click', (e) => {
    console.log(e);
    addBook(e);
    closeForm(e);
});