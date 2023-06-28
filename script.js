let myLibrary = [
  {
    title: 'A Rainha Vermelha',
    author: 'Victoria Aveyard',
    pages: 419,
    status: true,
  },
  {
    title: ' O Médico da Humanidade e a Cura da Corrupção',
    author: ' Augusto Cury',
    pages: 254,
    status: true,
  },
];
let array_icons = ['📘', '📗', '📕', '📙'];

window.onload = Bookcase();

//-------------------------------------------------------------------------
//          Mostrar ou fechar o pop-up do formulario para adicionar um livro
//-------------------------------------------------------------------------
document.querySelector('#btn_open_pop-up').addEventListener('click', () => {
  document.querySelector('#pop-up_form').style.visibility = 'visible';
});

document.querySelector('.btn_close_pop-up').addEventListener('click', () => {
  document.querySelector('#pop-up_form').style.visibility = 'hidden';
});

//---------------------------------
//          Constructor
//---------------------------------
function NewBook(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

//------------------------------------------------
//          Registro do novo livro
//------------------------------------------------
const btn_form_addbook = document.querySelector('.btn_form_addbook');

btn_form_addbook.addEventListener('click', AddBookToLibrary);

// Função responsavel por registra o novo livro no sistema
function AddBookToLibrary(event) {
  let name = form.title.value;
  let author = form.author.value;
  let pages = form.pages.value;
  let status = form.status.checked;
  //---------------------

  //---------------------
  if (name === '') {
  } else {
    event.preventDefault();
    let Book = new NewBook(name, author, pages, status);
    myLibrary.push(Book);

    Bookcase();

    document.querySelector('#pop-up_form').style.visibility = 'hidden';
    form.title.value = '';
    form.author.value = '';
    form.pages.value = '';
  }
}

// Função responsavel por criar a estante de livros
function Bookcase() {
  const display = document.querySelector('.books_grid');
  const books = document.querySelectorAll('.book');
  books.forEach((book) => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createCardBook(myLibrary[i], display);
  }
}

// Função responsavel por criar o cards dos livros
function createCardBook(book, library) {
  const bookDiv = document.createElement('div');

  const bookdata = document.createElement('div');
  bookdata.classList.add('bookdata');

  const bookactions = document.createElement('div');
  bookactions.classList.add('bookactions');

  const titleDiv = document.createElement('label');
  const authDiv = document.createElement('span');
  const pageDiv = document.createElement('span');

  const removeBtn = document.createElement('img');
  const readBtn = document.createElement('input');

  //------------------------------------------------------
  bookDiv.classList.add('book');
  bookDiv.setAttribute('id', myLibrary.indexOf(book));
  bookDiv.classList.add('cards');

  //------------------------------------------------------
  titleDiv.innerHTML =
    array_icons[Math.floor(Math.random() * 4)] + ' ' + book.title;
  titleDiv.classList.add('title');
  bookDiv.appendChild(titleDiv);

  authDiv.innerHTML = book.author;
  authDiv.classList.add('author');
  bookdata.appendChild(authDiv);

  pageDiv.innerHTML = book.pages + ' p.';
  pageDiv.classList.add('pages');
  bookdata.appendChild(pageDiv);

  //------------------------------
  // Altera o status do livro
  //------------------------------
  readBtn.classList.add('readBtn');
  readBtn.setAttribute('class', 'readBtn');
  readBtn.setAttribute('type', 'checkbox');
  if (book.status === true) {
    readBtn.checked = true;
  }
  bookactions.appendChild(readBtn);

  readBtn.addEventListener('click', () => {
    book.status = !book.status;
  });

  //-------------------------------
  // Remover o livro da estante
  //-------------------------------
  removeBtn.setAttribute('src', 'Imgs//delete.png');
  removeBtn.setAttribute('class', 'removeBtn');
  removeBtn.setAttribute('id', 'removeBtn');
  bookactions.appendChild(removeBtn);

  removeBtn.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    Bookcase();
  });

  //------------------------------------------------
  library.appendChild(bookDiv);
  bookDiv.appendChild(bookdata);
  bookDiv.appendChild(bookactions);
}
