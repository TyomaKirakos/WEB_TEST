let fastTest = () => {
    const testBlock = document.querySelector('.test-page__tasks-block');
    const testPagination = document.querySelector('.tasks-pagination');
    const finishBtn = document.querySelector('.test-page__finish-btn');

    let tasks = JSON.parse(localStorage.tasks);
    let currentTasks = [];

    // Отбор заданий в случайном пордяке
    for (let i = 0; i < 5; i++){
        let taskNumber = Math.floor(Math.random() * (tasks.length));
        currentTasks.push(tasks[taskNumber]);
        tasks.splice(taskNumber, 1);
    }

    console.log(currentTasks);

    // генерация карточек с заданиями
    currentTasks.forEach((task, index) => {
        let taskBlock = document.createElement('div');
        taskBlock.classList.add(`test-page__task-block`, `task-block`, `task-order_${index}`);
        taskBlock.setAttribute('id', `taskId_${task.id}`);
        taskBlock.innerHTML = `<xmp class="task-block__task-text blue-bold-text">${task.question}</xmp>`;
        if (task.rightAnswers.length == 1){
            taskBlock.innerHTML += `<div class="task-block__task-options task-options" id="task-options_${task.id}">
            
            <label for="task${task.id}_0" class="task-options__task-option"><input type="radio" class="task-option__radio-input task-option__input" name="taskId_${task.id}" value="${task.options[0]}" id="task${task.id}_0"><xmp class="task-option__option-text just-text">${task.options[0]}</xmp></label>

            <label for="task${task.id}_1" class="task-options__task-option"><input type="radio" class="task-option__radio-input task-option__input" name="taskId_${task.id}" value="${task.options[1]}" id="task${task.id}_1"><xmp class="task-option__option-text just-text">${task.options[1]}</xmp></label>

            <label for="task${task.id}_2" class="task-options__task-option"><input type="radio" class="task-option__radio-input task-option__input" name="taskId_${task.id}" value="${task.options[2]}" id="task${task.id}_2"><xmp class="task-option__option-text just-text">${task.options[2]}</xmp></label>
            
            <label for="task${task.id}_3" class="task-options__task-option"><input type="radio" class="task-option__radio-input task-option__input" name="taskId_${task.id}" value="${task.options[3]}" id="task${task.id}_3"><xmp class="task-option__option-text just-text">${task.options[3]}</xmp></label>
            </div>`;
        } else {
            taskBlock.innerHTML += `<div class="task-block__task-options task-options" id="task-options_${task.id}">
            <label for="task${task.id}_0" class="task-options__task-option"><input type="checkbox" class="task-option__checkbox task-option__input" name="taskId_${task.id}" value="${task.options[0]}" id="task${task.id}_0"><xmp class="task-option__option-text just-text">${task.options[0]}</xmp></label>

            <label for="task${task.id}_1" class="task-options__task-option"><input type="checkbox" class="task-option__checkbox task-option__input" name="taskId_${task.id}" value="${task.options[1]}" id="task${task.id}_1"><xmp class="task-option__option-text just-text">${task.options[1]}</xmp></label>

            <label for="task${task.id}_2" class="task-options__task-option"><input type="checkbox" class="task-option__checkbox task-option__input" name="taskId_${task.id}" value="${task.options[2]}" id="task${task.id}_2"><xmp class="task-option__option-text just-text">${task.options[2]}</xmp></label>
            
            <label for="task${task.id}_3" class="task-options__task-option"><input type="checkbox" class="task-option__checkbox task-option__input" name="taskId_${task.id}" value="${task.options[3]}" id="task${task.id}_3"><xmp class="task-option__option-text just-text">${task.options[3]}</xmp></label>
            </div>`;
        }

        taskBlock.innerHTML += '</div>';

        // console.log(taskBlock);
        testBlock.append(taskBlock);

        // генерация номеров страниц
        let taskPageBtn = document.createElement('button');
        taskPageBtn.classList.add('tasks-pagination__task-number', 'btn', `task-order_${index}`);
        taskPageBtn.textContent = index + 1;
        testPagination.append(taskPageBtn);
    });

    // Заканчивание теста
    finishBtn.addEventListener('click', calculatingResults);

    function calculatingResults(){
        let score = 0;
        let maxRightAnswers = 0;
        let optionsBlocks = document.querySelectorAll('.task-options');
    
        // Вычисление общего кол-ва правильных ответов
        currentTasks.forEach(currentTask => {
            maxRightAnswers += currentTask.rightAnswers.length;
        })

        console.log(maxRightAnswers);

        // перебор всех блоков с вариантами ответов
        optionsBlocks.forEach(optionsBlock => {
            // Нахождение айди текущего блока с вариантами ответов
            let currentId = optionsBlock.id;
            currentId = currentId.split('_');
            currentId = currentId[currentId.length-1];

            let options = optionsBlock.querySelectorAll('.task-option__input');
            options.forEach(option => {
                if (option.checked){
                    let currentTask = currentTasks.find(task => task.id == currentId);
                    if (option.classList.contains('task-option__radio-input')){
                        if (option.value == currentTask.rightAnswers[0]){
                            console.log('Верно');
                            score++;
                        }
                    } else{
                        if (option.value == currentTask.rightAnswers[0] || option.value == currentTask.rightAnswers[1] || option.value == currentTask.rightAnswers[2] || option.value == currentTask.rightAnswers[3]){
                            console.log('Верно');
                            score++;
                        }
                    }
                }
            })   
        })
        console.log(score);
    }
}

export default fastTest;