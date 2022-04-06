import checkLocalStorage from "./modules/localStorageFill.js";
import testDirecting from "./modules/testDirecting.js";
import login from "./modules/login.js";
import registration from "./modules/registration.js";
import logout from "./modules/logout.js";
import profileGenerating from "./modules/profileGenerating.js";
import fillTasksInLS from "./modules/fillTasksInLS.js";
import fastTest from "./modules/fastTest.js";
import marathonTest from "./modules/marathonTest.js"
import stopwatch from "./modules/stopwatch.js";

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
} else if (currentPageURL == 'start-fast-test.html' || currentPageURL == 'start-marathon-test.html'){
    fillTasksInLS();
} else if (currentPageURL == 'fast-test.html'){
    fastTest();
    stopwatch();
} else if(currentPageURL == 'marathon-test.html'){
    stopwatch();
    marathonTest();
} else if (currentPageURL == 'index.html'){
    checkLocalStorage();
    testDirecting();
    logout();
} else {
    checkLocalStorage();
    testDirecting();
    logout();
}



