import checkLocalStorage from "./modules/localStorageFill.js";
import testDirecting from "./modules/testDirecting.js";
import login from "./modules/login.js";
import registration from "./modules/registration.js";
import logout from "./modules/logout.js";
import profileGenerating from "./modules/profileGenerating.js"

let currentPageURL = document.location.href;
currentPageURL = currentPageURL.split('/');
currentPageURL = currentPageURL[currentPageURL.length-1];

if (currentPageURL == 'login.html'){
    login();
} else if (currentPageURL == 'registration.html'){
    registration();
} else if (currentPageURL == 'profile.html'){
    profileGenerating();
    logout();
} else if (currentPageURL == 'index.html'){
    checkLocalStorage();
    testDirecting();
    logout();
} else {
    checkLocalStorage();
    testDirecting();
    logout();
}



