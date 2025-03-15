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
    // container has book-ID value used to identify it when removing
    containerDiv.setAttribute("book-id",book.id);

    // header div holding the delete button
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("book-container-header");
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.setAttribute("book-id",book.id);
    deleteButton.textContent = "X";
    // adding event listener for delete button
    deleteButton.addEventListener("click", () =>{ 
      // remove book from library array
      deleteId = deleteButton.getAttribute("book-id");
      for (let i=0; i < myLibrary.length; i++){
        if(myLibrary[i].id === deleteId){
          myLibrary.splice(i,1);
        }
      }

      // find parent container through book ID and remove
      document.querySelector(`div[book-id='${deleteButton.getAttribute("book-id")}']`).remove();
    })
    headerDiv.appendChild(deleteButton);

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
    containerDiv.appendChild(headerDiv);
    containerDiv.appendChild(titleDiv);
    containerDiv.appendChild(authorDiv);
    containerDiv.appendChild(pagesDiv);
    containerDiv.appendChild(readDiv);

    //appending book container to body element of document
    documentBody.appendChild(containerDiv);
  }
}

// "Add Book" Button shows form dialog upon click
addBookButton = document.querySelector("button#add-button");
addBookDialog = document.querySelector("dialog#add-button-dialog");
addBookButton.addEventListener("click", () => {
  addBookDialog.showModal();
})

// Implementing "Add Book" modal dialog form functionality
submitBookButton = document.querySelector("input.dialog-submit-button");
submitBookButton.addEventListener("click", (event) => {
  event.preventDefault();

  // read input values from form
  title = document.querySelector("input#title").value;
  author = document.querySelector("input#author").value;
  pages = document.querySelector("input#pages").value;
  readChecked = document.querySelector("input[name='read']:checked");
  read = false;
  if (readChecked.value === "true"){
    read = true;
  }

  // add book to library based on provided values
  addBookToLibrary(title, author, pages, read, myLibrary);

  printLibrary(myLibrary.slice(myLibrary.length-1)); //print only newly added (last) element.
  addBookDialog.close();
})

// Close button for "Add Book" modal dialog
addBookCloseButton = document.querySelector("button.dialog-close-button");
addBookCloseButton.addEventListener("click", () => {
  addBookDialog.close();
})

// Adding example books to library and printing
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false, myLibrary);
addBookToLibrary("The Catcher in the Rye", "J. D. Salinger", 277, true, myLibrary);
addBookToLibrary("Nineteen Eighty Four", "George Orwell", 400, true, myLibrary);
addBookToLibrary("Don Quixote", "Miguel de Cervantes", 1000, false, myLibrary);
// for (const book of myLibrary) {
//   console.log(`${book.title} by ${book.author}.`);
// }
printLibrary(myLibrary);
