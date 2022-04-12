const bestResultTableGenerating = () => {
    const bestResultTable = document.querySelector('.best-result-table');
    let users = JSON.parse(localStorage.users);
    users.sort((prev, next) => next.bestResult - prev.bestResult);
    console.log(users);

    bestResultTable.innerHTML = `<div class="best-result-table__table-head table-cell table-head">
                                    <p class="table-cell__text just-text">№</p>
                                </div>
                                <div class="best-result-table__table-head table-cell table-head">
                                    <p class="table-cell__text just-text">Ник</p>
                                </div>
                                <div class="best-result-table__table-head table-cell table-head">
                                    <p class="table-cell__text just-text">Время</p>
                                </div>
                                <div class="best-result-table__table-head table-cell table-head">
                                    <p class="table-cell__text just-text">Счёт</p>
                                </div>`;

    for (let i = 0; i < 10; i++){
        if (users[i]){
            bestResultTable.innerHTML += `<div class="best-result-table__table-head table-cell">
                                            <p class="table-cell__text just-text">${i+1}</p>
                                        </div>
                                        <div class="best-result-table__table-head table-cell">
                                            <p class="table-cell__text just-text">${users[i].login}</p>
                                        </div>
                                        <div class="best-result-table__table-head table-cell">
                                            <p class="table-cell__text just-text">${users[i].bestResultTime}</p>
                                        </div>
                                        <div class="best-result-table__table-head table-cell">
                                            <p class="table-cell__text just-text">${users[i].bestResult}%</p>
                                        </div>`
        } else{
            bestResultTable.innerHTML += `<div class="best-result-table__table-head table-cell">
                                            <p class="table-cell__text just-text">${i+1}</p>
                                        </div>
                                        <div class="best-result-table__table-head table-cell">
                                            <p class="table-cell__text just-text"></p>
                                        </div>
                                        <div class="best-result-table__table-head table-cell">
                                            <p class="table-cell__text just-text"></p>
                                        </div>
                                        <div class="best-result-table__table-head table-cell">
                                            <p class="table-cell__text just-text"></p>
                                        </div>`
        }
    }
}

export default bestResultTableGenerating;