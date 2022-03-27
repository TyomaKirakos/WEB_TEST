const checkLocalStorage = () => {
    const authorizedBtns = document.querySelector('.authorized-btns');
    const notAuthorizedBtns = document.querySelector('.not-authorized-btns');


    if (!localStorage.currentUser){
        localStorage.setItem('currentUser', 'none');
    }

    if (localStorage.currentUser == 'none'){
        authorizedBtns.style.display = 'none';
        notAuthorizedBtns.style.display = 'flex';
    } else{
        authorizedBtns.style.display = 'flex';
        notAuthorizedBtns.style.display = 'none';
    }

    if (!localStorage.users){
        let admin = {
            id: 0,
            role: 1,
            login: 'Admin',
            password: 'admin',
            bestResult: 0,
            lastResult: 0,
            bestResultTime: '00:00'
        };
        
        localStorage.setItem('users', JSON.stringify([admin]));
    }
    
}

export default checkLocalStorage;