import checkLocalStorage from "./modules/localStorageFill.js";
import testDirecting from "./modules/testDirecting.js";
import login from "./modules/login.js";
import registration from "./modules/registration.js";

let currentPageURL = document.location.href;
currentPageURL = currentPageURL.split('/');


if (currentPageURL[currentPageURL.length-1] == 'index.html'){
    checkLocalStorage();
    testDirecting();
}

if (currentPageURL[currentPageURL.length-1] == 'login.html'){
    login();
}

if (currentPageURL[currentPageURL.length-1] == 'registration.html'){
    registration();
}



