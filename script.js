// Functions ==================================================================

// Book object constructor
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (status) {
        this.status = 'Read'
    } else {
        this.status = "Haven't Read"
    };

}

// Opens Form
let openForm = () => {
    formWindow.classList.add('show');

};


// Closes Form
let closeForm = () => {
    formWindow.classList.remove('show');

};


// Adds new book object to library
let addBookToLibrary = () => {

    let addedBook = new Book(
        form.elements['title'].value
        , form.elements['author'].value
        , form.elements['pages'].value
        , form.elements['read'].checked
    );

    myLibrary.push(addedBook);
    form.reset();
}


// Creates a new book card given index of book in library
let createCard = (index) => {
    // const main = document.querySelector('.main');
    const referenceNode = document.querySelector('.add-book-card');

    const newCard = document.createElement('article');
    newCard.classList.add('book-card');
    newCard.dataset.index = index;

    const newH2 = document.createElement('h2');
    const h2Text = document.createTextNode(myLibrary[index].title);
    newH2.appendChild(h2Text);

    const newH3 = document.createElement('h3');
    const h3Text = document.createTextNode(myLibrary[index].author);
    newH3.appendChild(h3Text);

    const newP = document.createElement('p');
    const pText = document.createTextNode(myLibrary[index].pages + " pages");
    newP.appendChild(pText);

    const newButton = document.createElement('button');
    newButton.classList.add('read-status');
    const newButtonText = document.createTextNode(myLibrary[index].status);
    newButton.appendChild(newButtonText);

    const newRemoveButton = document.createElement('button');
    newRemoveButton.classList.add('remove-button');
    const removeText = document.createTextNode('x');
    newRemoveButton.appendChild(removeText);

    newCard.append(newH2, newH3, newP, newButton, newRemoveButton);

    main.insertBefore(newCard, referenceNode);

}

// Adds a Event Listener to each Read/Remove Button currently available
let addEventListeners = () => {
    let removeButtons = document.querySelectorAll('.remove-button');
    let readButtons = document.querySelectorAll('.read-status');
    removeButtons.forEach(button => {
        if (!button.classList.contains('listener')) {
            button.classList.add('listener');
            button.addEventListener('click', (e) => { removeBook(button) });
        }
    });
    readButtons.forEach(button => {
        if (!button.classList.contains('listener')) {
            button.classList.add('listener');
            button.addEventListener('click', (e) => { updateReadStatus(button) });
        }
    });
}

// Removes book with given index from library and deletes the card
let removeBook = (button) => {
    let card = button.closest('.book-card');
    let index = card.dataset.index;
    // let card = document.querySelector(`[data-index="${index}"]`);
    card.remove();
    myLibrary.splice(index, 1);
}

// Updates the status of the book when pressing the given button
let updateReadStatus = (button) => {
    let card = button.closest('.book-card');
    let index = card.dataset.index;

    if (myLibrary[index].status == 'Read') {
        myLibrary[index].status = "Haven't Read";
    } else {
        myLibrary[index].status = 'Read';
    };

    if (myLibrary[index].status == 'Read') {
        button.classList.remove('not-read');
    } else {
        button.classList.add('not-read');
    }

    button.innerText = myLibrary[index].status;;

}

// Variables ==================================================================

let Hobbit = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 310,
    status: 'Read'
};
let myLibrary = [Hobbit];
let addBookButton = document.querySelector('#add-book');
let submitBookButton = document.querySelector('#submit-book');
let formWindow = document.querySelector('.form-window');
let formBackdrop = document.querySelector('.form-backdrop');
let form = document.querySelector('#book-form');
let main = document.querySelector('.main');

// Functions ran at start =====================================================

createCard(0);
addEventListeners();

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

    let index = myLibrary.length;

    addBookToLibrary();
    createCard(index);
    addEventListeners();
    closeForm();
});
