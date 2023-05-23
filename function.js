
import { lightToggleDialog, fragment } from "./scripts.js";


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