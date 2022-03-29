import checkLocalStorage from "./modules/localStorageFill.js";
import testDirecting from "./modules/testDirecting.js";
import login from "./modules/login.js";
import registration from "./modules/registration.js";
import logout from "./modules/logout.js";
import profileGenerating from "./modules/profileGenerating.js"

let currentPageURL = document.location.href;
currentPageURL = currentPageURL.split('/');


// if (currentPageURL[currentPageURL.length-1] == 'index.html'){

// }

if (currentPageURL[currentPageURL.length-1] == 'login.html'){
    login();
} else if (currentPageURL[currentPageURL.length-1] == 'registration.html'){
    registration();
} else if (currentPageURL[currentPageURL.length-1] == 'profile.html'){
    profileGenerating();
    logout();
} else if (currentPageURL[currentPageURL.length-1] == 'index.html'){
    checkLocalStorage();
    testDirecting();
    logout();
} else {
    checkLocalStorage();
    testDirecting();
    logout();
}



