const themeSwitchRef = document.querySelector("#theme-switch-toggle");

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitchRef.addEventListener('change', handleThems);

function handleLightTheme() {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
};
function handleDarkTheme() {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
};

function handleThems() {
  if (!themeSwitchRef.checked) {
    handleLightTheme();
    // console.log(themeSwitchRef.checked);
  } else {
    handleDarkTheme();
    // console.log(themeSwitchRef.checked);
  }
  handleThemeInLocalStorage(themeSwitchRef.checked);
}
function handleThemeInLocalStorage(checked) {
  if (checked) {
    localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  } else {
    localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT))
  }
};

const currentTheme = localStorage.getItem('Theme');
const parsedcurrentTheme = JSON.parse(currentTheme);
if (parsedcurrentTheme === Theme.LIGHT) {
  themeSwitchRef.checked = false;
  handleLightTheme();

} else {
  themeSwitchRef.checked = true;
  handleDarkTheme();
}

