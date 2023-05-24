// import {  
//   BOOKS_PER_PAGE,
//   books, 
//   genres, 
//   authors
//   } from "./data.js";

//   import {
//     changeTheme
//   } from './function.js'

//   /**
//  * Check if the 'books' variable is valid.
//  * @throws {Error} If 'books' is invalid.
//  */

// if (!books || !Array.isArray(books)) {
//   throw new Error('Source required');
// }
    
// const matches = books //@type (array)
// let page = 1; //@type (number)

// /**
//  * The HTML fragment for the imported books.
//  * @type {DocumentFragment}
//  */
// export const fragment = document.createDocumentFragment() //create an HTML fragment for the imported books
// const extracted = books.slice(0, 36)  //To show 36 books at a time

// /**
//  * The first 36 books to be shown.
//  * @type {Array}
//  */
// const moreBooks = document.querySelector('[data-list-button]'); //scroll-down button
// moreBooks.setAttribute("style", "color: rgba(217, 35, 255)"); // button text color

// /**
//  * To show books left to of the whole package
//  * shows as a number on the 'moreBooks' button
//  * @returns { number } 
//  */
// const remaingBooks = () => {
// const currentBooks = document.querySelectorAll('preview'); 
// const allSeenBooks = currentBooks.length;
// //subtract books on page from total books in object
// const remaining = books.length - allSeenBooks;
// //add the text to the button element
// return remaining
//    }


// /**
//  * This function loads the home page of the website with 
//  * the books shown in a list of 36 at a time.
//  * @param {imported object} books 
//  */
// const appendBooks = (books) => {

//     for (let i = 0; i < BOOKS_PER_PAGE; i++) {
        
//         const book = books[i]; //get the books from index 0 in the books object  
//         const button = document.createElement('button'); //button for books so each book is in its own card
//           button.classList.add('preview'); //create a class and call it preview
//           button.dataset.preview = book.id;

//       button.innerHTML =/* HTML markup for the book cards */
//       `
//        <img class="preview__image" src="${book.image}" />
//        <div class="preview__info">
//          <h3 class="preview__title">${book.title}</h3>
//          <div class="preview__author">${authors[book.author]}</div>
//          <div class="preview__date">${""}</div>
//        </div>
//      `;
     
    
//     fragment.appendChild(button); // Append the button to the fragment.
// }

//      document.querySelector('[data-list-items]').appendChild(fragment);

// moreBooks.innerHTML = `Show more`
//     }

//     /**
//      * Adds 36 books to the page
//      */
// const showMoreAction = (event) => {
//     event.preventDefault()
//     const booksOnPage = document.querySelectorAll('.preview');
//     const booksOnPageCount = booksOnPage.length;
//     const booksLeft = books.length - booksOnPageCount;
    
    
//     if(booksLeft > 0) { //check if there are still books left in the books object
//         appendBooks(books.slice(booksOnPageCount, booksOnPageCount + 36)) //If there are, add more to the page
//     }   
    
//  const bookList = document.querySelectorAll('.preview')
//  for (let k = booksOnPageCount; k < books.length; k++ ) {
//     bookList[k].addEventListener("click", descriptionOverlay )
//  }
//     };

// const descriptionOverlay = (event) => {
//     const bookSummary = document.querySelector('[data-list-active]') //defining position for book Summary
//     const book = event.target.closest('.preview'); 
//     const bookId = book.getAttribute('data-preview');

//     for (let i = 0; i < books.length; i++) {
       
//         if (books[i].id === bookId) {  //Is there id in the search object
       
//         bookSummary.innerHTML = /*html*/
//         `<div class="overlay__preview">
//         <img class="overlay__blur" data-list-blur="" src="${books[i].image}">
//         <img class="overlay__image" data-list-image="" src="${books[i].image}">
//         </div>
//         <div class="overlay__content">
//         <h3 class="overlay__title" data-list-title="">${books[i].title} (${new Date(books[i].published).getFullYear()})</h3>
//         <div class="overlay__data" data-list-subtitle="">${authors[books[i].author]}</div>
//         <p class="overlay__data overlay__data_secondary" data-list-description="">${books[i].description}</p>
//         </div>
//         <div class="overlay__row">
//         <button class="overlay__button overlay__button_primary" data-list-close="">Close</button>
//         </div>`
//         }
//     }

// }

// document.addEventListener("click", appendBooks(books))
// document.querySelector('[data-list-button]').addEventListener("click", showMoreAction) //event lister to add more books to the page


// searchButton.addEventListener("click",(event) => {
//   event.preventDefault()
//   const formData = new FormData(search_form)
//   const title = formData.get('title')
//   const author = formData.get('author')
//   const genre = formData.get('genre')
//   let result = []
//   if ((author !== "any" || genre !== "any") && title.trim() !== "") {

//      // Filter by title, author, and genre
//       result = books.filter((book) => {
//         return book.title.toLowerCase().includes(title.toLowerCase()) && 
//           book.author === author &&
//           book.genres.includes(genre);
//       });
//     } else if (author !== "any" && genre !== "any") {
//       // Filter by author and genre only
//       result = books.filter((book) => {
//         return book.author === author &&
//           book.genres.includes(genre);
//       });
//     } else if (author !== "any") {
//       // Filter by author only
//       result = books.filter((book) => {
//         return book.author === author;
//       });
//     } else if (genre !== "any") {
//       // Filter by genre only
//       result = books.filter((book) => {
//         return book.genres.includes(genre);
//       });
//     } else {
//       // Filter by title only
//       result = books.filter((book) => {
//         return book.title.toLowerCase().includes(title.toLowerCase());
//       });
//     }
  
// });

// /**
//  * This variable is the dialog box for the light/dark toggle overlay
//  */
// export const lightToggleDialog = data.theme.overlay;

// lightToggleDialog.innerHTML = /*html*/
// 	`<div class="overlay__content">
//     <form class="overlay__form" data-settings-form="" id="settings">
//       <label class="overlay__field">
//           <div class="overlay__label">Theme</div>

//               <select class="overlay__input overlay__input_select" data-settings-theme="" name="theme">
//                   <option value="day">Day</option>
//                   <option value="night">Night</option>
//               </select>
//       </label>
//     </form>

//     <div class="overlay__row">
//       <button class="overlay__button" data-settings-cancel="">Cancel</button>
//           <button class="overlay__button overlay__button_primary" type="submit" form="settings">Save</button>
//     </div>
//   </div>`




// const lightToggleBtn = data.home.theme //top button for theme

// lightToggleBtn.addEventListener("click", (event) => {  //This is the event listener shows the light/dark toggle overlay
// 	event.preventDefault();
// 	lightToggleDialog.showModal();
// })

// const toggleCancelBtn = lightToggleDialog.querySelectorAll('button')[0]
// const toggleSaveBtn = lightToggleDialog.querySelectorAll('button')[1];
// toggleSaveBtn.addEventListener("click", changeTheme)
// /* event listener for cancel button to remove overlay */
// toggleCancelBtn.addEventListener("click", (event) => {
// 	event.preventDefault();
  
// 	lightToggleDialog.close();

// })