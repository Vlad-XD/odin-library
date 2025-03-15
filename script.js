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
function printLibrary(library) {
  // JS will only create elements. Styling will be done through CSS.
  for (const book of library) {
    // obtaining body element of document
    const documentBody = document.querySelector("body");

    // containerDiv will hold all info for Book
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("book-container");

    // individual <div> elements to hold different information of the Book
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-container");

    const titleLabel = document.createElement("p");
    titleLabel.classList.add("label");
    titleLabel.textContent = "Title:";
    titleDiv.append(titleLabel);
    const titleContent = document.createElement("p");
    titleContent.classList.add("content");
    titleContent.textContent = book.title;
    titleDiv.append(titleContent);

    const authorDiv = document.createElement("div");

    const authorLabel = document.createElement("p");
    authorDiv.classList.add("author-container");
    authorLabel.classList.add("label");
    authorLabel.textContent = "Author:";
    authorDiv.append(authorLabel);
    const authorContent = document.createElement("p");
    authorContent.classList.add("content");
    authorContent.textContent = book.author;
    authorDiv.append(authorContent);

    const pagesDiv = document.createElement("div");
    pagesDiv.classList.add("pages-container");

    const pagesLabel = document.createElement("p");
    pagesDiv.classList.add("pages-container");
    pagesLabel.classList.add("label");
    pagesLabel.textContent = "Pages:";
    pagesDiv.append(pagesLabel);
    const pagesContent = document.createElement("p");
    pagesContent.classList.add("content");
    pagesContent.textContent = book.pages;
    pagesDiv.append(pagesContent);

    const readDiv = document.createElement("div");
    readDiv.classList.add("read-container");
    
    const readButton = document.createElement("button");
    readButton.type = "button";
    readButton.textContent = book.read ? "READ" : "NOT READ";
    readDiv.appendChild(readButton);
    

    // appending individual elements to containerDiv
    containerDiv.appendChild(titleDiv);
    containerDiv.appendChild(authorDiv);
    containerDiv.appendChild(pagesDiv);
    containerDiv.appendChild(readDiv);

    //appending book container to body element of document
    documentBody.appendChild(containerDiv);
  }
}

// Adding example books to library and printing
addBookToLibrary("Book 1", "Author 1", 215, true, myLibrary);
addBookToLibrary("Book 2", "Author 2", 215, true, myLibrary);
addBookToLibrary("Book 3", "Author 3", 215, false, myLibrary);
addBookToLibrary("Book 4", "Author 4", 215, false, myLibrary);
// for (const book of myLibrary) {
//   console.log(`${book.title} by ${book.author}.`);
// }
printLibrary(myLibrary);
