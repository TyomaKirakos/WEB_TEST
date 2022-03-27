const testDirecting = () => {
    const directFastTest = document.querySelector('.fast-test-btn');
    const directMarathonTest = document.querySelector('.marathon-btn');
    const body = document.querySelector('body');

    directFastTest.addEventListener('click', () => {
        if (localStorage.currentUser == 'none'){
            modalAppearance();
        } else{
            window.location.href = 'fast-test.html';
        }
    });
    
    directMarathonTest.addEventListener('click', () => {
        if (localStorage.currentUser == 'none'){
            modalAppearance();
        } else{
            window.location.href = 'marathon-test.html';
        }
    });


    function modalAppearance (){
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = '<p class="modal__text just-text">Войдите или зарегистрируйтесь, чтобы проходить тесты!</p>';
        body.append(modal);
        setTimeout(
            () => {
                modal.remove();
            }
            , 2000
        );
    }
}

export default testDirecting;