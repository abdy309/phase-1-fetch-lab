
function fetchBooks() {
  // Send a GET request to the Game of Thrones books API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Convert the response to JSON
    .then((books) => renderBooks(books)); // Pass the books to the render function
}

function renderBooks(books) {
  const main = document.querySelector('main');

  // Loop through the list of books and create an <h2> element for each title
  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}
