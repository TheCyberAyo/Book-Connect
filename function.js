
import { lightToggleDialog} from "./scripts.js";

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
/**
 * the selected option when the save button was clicked then change the theme.
 * @param event 
 */
export const changeTheme = (event) => {
  event.preventDefault();

  
  const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
  };
  
  const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
  };

  const themeOption = document.querySelector('[data-settings-theme]').querySelectorAll('option')

let selectedTheme = null; //first find the selected theme
for (const singleOption of themeOption) {
  if (singleOption.selected) {
    selectedTheme = singleOption.value
  }
}



const root = document.documentElement; //fetch the HTML document to change its colors

  if (selectedTheme.toLocaleLowerCase() !== 'night') {
    root.style.setProperty('--color-dark', day.dark);
    root.style.setProperty('--color-light', day.light);
  } else {
    root.style.setProperty('--color-dark', night.dark);
    root.style.setProperty('--color-light', night.light);
  }

  
lightToggleDialog.close()

}