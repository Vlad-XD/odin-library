// array storing all book objects
const myLibrary = [];

/*
    Book: object that holds information about a book in a library.
    Constructors:
      - Book(string, string, int, boolean)
*/
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

/*
  addBookToLibrary: create a book and store it in a library
  Parameters: string title, string author, int pages, boolean read, array[Book] library 
  Return value: N/A
*/
function addBookToLibrary(title, author, pages, read, library) {
  newBook = new Book(title, author, pages, read);
  library.push(newBook);
}

/*
  printLibrary: loops through a library array and displays on a page
  Parameters: array[Book] library
  Return value: N/A
*/
function printLibrary() {

}

// Adding example books to library and printing
addBookToLibrary("Book 1","Author 1", 215, true, myLibrary);
addBookToLibrary("Book 2","Author 2", 215, true, myLibrary);
addBookToLibrary("Book 3","Author 3", 215, false, myLibrary);
addBookToLibrary("Book 4","Author 4", 215, false, myLibrary);
for (const book of myLibrary) {
  console.log(`${book.title} by ${book.author}.`);
}