let addBookButton = document.querySelector('#add-book');
let submitBookButton = document.querySelector('#submit-book')

addBookButton.addEventListener('click', (e) => {
    let form = document.querySelector('.form-window');
    form.style.display='block';
})

submitBookButton.addEventListener('click', (e) => {
    let form = document.querySelector('.form-window');
    form.style.display='none';
})