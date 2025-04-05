/*
    Book: object that holds information about a book in a library.
    Constructors:
      - Book(string, string, int, boolean)
*/
class Book {
  constructor(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
  }
}

/*
    Library: object that holds multiple books objects encompassing
             a collection.
    Constructors:
      - Library()
*/
class Library {
  books = [];
  constructor(){}

/*
  addBookToLibrary: create a book and store it in a library
  Parameters: string title, string author, int pages, boolean read 
  Return value: N/A
*/
 addBookToLibrary(title, author, pages, read) {
  this.books.push(new Book(title, author, pages, read));
}

/*
  printLibrary: loops through a the books array and displays on page
  Parameters: N/A
  Return value: N/A
*/
 printLibrary() {
  // JS will only create elements. Styling will be done through CSS.
  for (const book of this.books) {
    // obtaining body div element of document
    const documentBody = document.querySelector("div.body");

    // containerDiv will hold all info for Book
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("book-container");
    // container has book-ID value used to identify it when removing
    containerDiv.setAttribute("data-book-id",book.id);

    // header div holding the delete button
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("book-container-header");
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.setAttribute("data-book-id",book.id);
    deleteButton.textContent = "X";
    // adding event listener for delete button
    deleteButton.addEventListener("click", () =>{ 
      // remove book from library array
      for (let i=0; i < this.books.length; i++){
        if(this.books[i].id === deleteButton.getAttribute("data-book-id")){
          this.books.splice(i,1);
        }
      }

      // find parent container through book ID and remove
      document.querySelector(`div[data-book-id='${deleteButton.getAttribute("data-book-id")}']`).remove();
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
    // attach "read" class if book has been read: utilized to change button display
    if (book.read) {readButton.classList.add("read")}; 
    // adding event listener for "read" button to toggle status of whether book has been read
    readButton.addEventListener("click", () => {
      readButton.classList.toggle("read");
      book.read = book.read ? false : true;
      readButton.textContent = book.read ? "READ" : "NOT READ";
    })
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

/*
  printLatest: prints most recent book in library
  Parameters: N/A
  Return value: N/A
*/
printLatest() {
  // JS will only create elements. Styling will be done through CSS.
  for (const book of this.books.slice(this.books.length-1)) {
    // obtaining body div element of document
    const documentBody = document.querySelector("div.body");

    // containerDiv will hold all info for Book
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("book-container");
    // container has book-ID value used to identify it when removing
    containerDiv.setAttribute("data-book-id",book.id);

    // header div holding the delete button
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("book-container-header");
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.setAttribute("data-book-id",book.id);
    deleteButton.textContent = "X";
    // adding event listener for delete button
    deleteButton.addEventListener("click", () =>{ 
      // remove book from library array
      for (let i=0; i < this.books.length; i++){
        if(this.books[i].id === deleteButton.getAttribute("data-book-id")){
          this.books.splice(i,1);
        }
      }

      // find parent container through book ID and remove
      document.querySelector(`div[data-book-id='${deleteButton.getAttribute("data-book-id")}']`).remove();
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
    // attach "read" class if book has been read: utilized to change button display
    if (book.read) {readButton.classList.add("read")}; 
    // adding event listener for "read" button to toggle status of whether book has been read
    readButton.addEventListener("click", () => {
      readButton.classList.toggle("read");
      book.read = book.read ? false : true;
      readButton.textContent = book.read ? "READ" : "NOT READ";
    })
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

}

// Creating a library to use for this website
myLibrary = new Library();

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
  title = document.querySelector("input#title");
  author = document.querySelector("input#author");
  pages = document.querySelector("input#pages");
  readChecked = document.querySelector("input[name='read']:checked");
  read = false;
  if (readChecked.value === "true"){
    read = true;
  }

  // add book to library based on provided values
  myLibrary.addBookToLibrary(title.value, author.value, pages.value, read);
  myLibrary.printLatest();
  addBookDialog.close();

  // reset dialog inputs
  title.value= "";
  author.value= "";
  pages.value= "";
  document.querySelector("input[name='read'][value='true']").checked = true;

})

// Close button for "Add Book" modal dialog
addBookCloseButton = document.querySelector("button.dialog-close-button");
addBookCloseButton.addEventListener("click", () => {
  
  // reset dialog inputs
  document.querySelector("input#title").value= "";
  document.querySelector("input#author").value= "";
  document.querySelector("input#pages").value= "";
  document.querySelector("input[name='read'][value='true']").checked = true;

  addBookDialog.close();
})

// Adding example books to library and printing
myLibrary.addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
myLibrary.addBookToLibrary("The Catcher in the Rye", "J. D. Salinger", 277, true);
myLibrary.addBookToLibrary("Nineteen Eighty Four", "George Orwell", 400, true);
myLibrary.addBookToLibrary("Don Quixote", "Miguel de Cervantes", 1000, false);

myLibrary.printLibrary();

