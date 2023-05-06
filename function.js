
import {extracted} from './scripts'// Extract the relevant subset of data to display

export const createPreview = (props) => {
  for (const { author, image, title, id } of extracted) {// Loop through the extracted data and create a button for each item
  const { author: authorId, id, title } = props; // Destructure the author and title properties from the props object
  const element = document.createElement('button'); // Create a new button element
  element.classList = 'preview';
  element.setAttribute('data-preview', id);

  
  element.innerHTML = /* html */ `
    <img class="preview__image" src="${image}"/>
    <div class="preview__info">
      <h3 class="preview__title">${title}</h3>
      <div class="preview__author">${authors[authorId]}</div>
    </div>

  `
  return element
}
}