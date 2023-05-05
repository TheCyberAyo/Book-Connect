import {  
    BOOKS_PER_PAGE,
    books, 
    genres, 
    authors
    } from "./data.js";

  if (!books || !Array.isArray(books)) { //this checks if the books is a valid array
    throw new Error('Source required'); //if not, this message is received
  }
      
  const matches = books
  let page = 1;
  
/**
 *@param () for setting color theme 
 */

  const day = {
      dark: '10, 10, 20',
      light: '255, 255, 255',
  }
  
  const night = {
      dark: '255, 255, 255',
      light: '10, 10, 20',
  }

  const themeSelector = document.querySelector('[data-settings-theme]');
  const cancelButton = document.querySelector('[data-settings-cancel]');
  const saveButton = document.querySelector('#save-button');
  
  themeSelector.addEventListener('change', () => {
    const selectedTheme = themeSelector.value;
  
    if (selectedTheme === 'day') {
      setTheme(day);
      cancelButton.disabled = false;
      saveButton.disabled = true;
    } else {
      setTheme(night);
      cancelButton.disabled = true;
      saveButton.disabled = false;
    }
  });
  
  function setTheme(theme) {
    document.documentElement.style.setProperty('--bg-color', `rgb(${theme.bg})`);
    document.documentElement.style.setProperty('--text-color', `rgb(${theme.text})`);
  }

  /**
   * @param (books)
   * setting up their appearance on the webpage
   */
  const fragment = document.createDocumentFragment() //create an HTML fragment for the imported books
  const extracted = books.slice(0, 36)  //To show 36 books at a time
  
  
  const moreBooks = document.querySelector('[data-list-button]'); //scroll-down button
  moreBooks.setAttribute("style", "color: rgba(217, 35, 255)"); //

  /**
   * To show books left to of the whole package
   * shows as a number on the 'moreBooks' button
   * @returns { number } 
   */
  const updateBooksLeft = () => {
  const booksOnPage = document.querySelectorAll('preview'); //
  const booksOnPageCount = booksOnPage.length;
  //subtract books on page from total books in object
  const booksLeft = books.length - booksOnPageCount;
  //add the text to the button element
  return booksLeft
     }
  
  
   // replaced && with || to avoid a repeated check
  
  // create a function to show the books on the page
  /**
   * This function loads the home page of the website with 
   * the books shown in a list of 36 at a time.
   * @param {imported object} books 
   */
  const appendBooks = (books) => {
  
      /* use imported variable that stored the number of books that
      can be on the page at a time in a for loop to loop through the books
      and add only 36 at time*/
      for (let i = 0; i < BOOKS_PER_PAGE; i++) {
          //get the books from index 0 in the books object
          const book = books[i];
  
          /*create a button element for the books so each book is 
          in its own card*/
          const button = document.createElement('button');
  
            //create a class and call it preview
            button.classList.add('preview');
  
                 // Set the button's data-preview attribute to the book's id.
             button.dataset.preview = book.id;
  
        button.innerHTML =/* HTML markup for the book cards */
        `
         <img class="preview__image" src="${book.image}" />
         <div class="preview__info">
           <h3 class="preview__title">${book.title}</h3>
           <div class="preview__author">${authors[book.author]}</div>
           <div class="preview__date">${book.published}</div>
         </div>
       `;
       
      
      fragment.appendChild(button); // Append the button to the fragment.
  }
  
       document.querySelector('[data-list-items]').appendChild(fragment);
  
  moreBooks.innerHTML = `Show more (${updateBooksLeft()})`
      }
  
      /**
       * Adds 36 books to the page
       */
  const showMoreAction = (event) => {
      event.preventDefault()
          /* fetch the books that are already on the page then count them and
      use the number of books left in the books object to add more books so the button
      can stop adding more books when all the books in the object have been added*/
      const booksOnPage = document.querySelectorAll('.preview');
      const booksOnPageCount = booksOnPage.length;
      //subtract books on page from total books in object
      const booksLeft = books.length - booksOnPageCount;
      
      
      if(booksLeft > 0) { //check if there are still books left in the books object
          appendBooks(books.slice(booksOnPageCount, booksOnPageCount + 36)) //If there, are, add more to the page
      }   
          SHOW_MORE_BTN.innerHTML = `Show more (${booksLeft})`
  
          
   const bookList = document.querySelectorAll('.preview')
   for (let k = booksOnPageCount; k < books.length; k++ ) {
      bookList[k].addEventListener("click", descriptionOverlay )
   }
      };
  
  const descriptionOverlay = (event) => {
      const bookSummary = document.querySelector('[data-list-active]') //defining position for book Summary
      const book = event.target.closest('.preview'); 
      const bookId = book.getAttribute('data-preview');
  
      for (let i = 0; i < books.length; i++) {
         
          if (books[i].id === bookId) {  //Is there id in the search object
         
          bookSummary.innerHTML = /*html*/
          `<div class="overlay__preview">
          <img class="overlay__blur" data-list-blur="" src="${books[i].image}">
          <img class="overlay__image" data-list-image="" src="${books[i].image}">
          </div>
          <div class="overlay__content">
          <h3 class="overlay__title" data-list-title="">${books[i].title} (${new Date(books[i].published).getFullYear()})</h3>
          <div class="overlay__data" data-list-subtitle="">${authors[books[i].author]}</div>
          <p class="overlay__data overlay__data_secondary" data-list-description="">${books[i].description}</p>
          </div>
          <div class="overlay__row">
          <button class="overlay__button overlay__button_primary" data-list-close="">Close</button>
          </div>`
          }
      }
  
          //show the book summary overlay when its done being created
          bookSummary.showModal()
  
          //when the close button is clicked, the overlay should be removed
          document.querySelector('[data-list-close]').addEventListener("click", () => {
              bookSummary.close()
          })
  
          
    
  }
  
  document.addEventListener("click", appendBooks(books))
  document.querySelector('[data-list-button]').addEventListener("click", showMoreAction) //event lister to add more books to the page
  
  /*
   * The following eventListener allow for the page to be clickable
   * To show discription when clicked on image-card
   */
   const bookList = document.querySelectorAll('.preview')
   for (let k = 0; k < books.length; k++ ) {
      bookList[k].addEventListener("click", descriptionOverlay )
   }

/**
 * @param (title )This code checks if the title to be typed by user is the or not
 */
   for (let i = 0; i < booksList.length; i++) {
    // Check if book title matches the search filter
    const titleMatch = filters.title.trim() === '' || booksList[i].title.toLowerCase().includes(filters.title.toLowerCase());

    // Check if book author matches the search filter
    const authorMatch = filters.author === 'any' || booksList[i].author === filters.author;

    // Check if book genre matches the search filter
    let genreMatch = filters.genre === 'any';
    for (let j = 0; j < booksList[i].genres.length; j++) {
        if (booksList[i].genres[j] === filters.genre) {
            genreMatch = true;
            break;
        }
    }

    // Add book to result list if it matches all search filters
    if (titleMatch && authorMatch && genreMatch) {
        result.push(booksList[i]);
    }
} 

 
