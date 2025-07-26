let darkmode = localStorage.getItem('darkmode');
let themeSwitch = document.getElementById('theme-switch');

let enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
}

let disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
}

if(darkmode === "active") {
  enableDarkMode();
}

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');

  //
  if ( darkmode !== "active" ) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

})

