let fastTest = () => {
    const testBlock = document.querySelector('.test-page__tasks-block');
    const testPagination = document.querySelector('.tasks-pagination');
    const stopwatchMinBlock = document.querySelector('.test-stopwatch__minutes');
    const stopwatchSecBlock = document.querySelector('.test-stopwatch__seconds');

    let tasks = JSON.parse(localStorage.tasks);
    let currentTasks = [];

    // Секундомер
    let time;

    function start(){
        time = 0;
        setInterval(stopWatch, 1000);
    }
    
    function stopWatch(){
        time++;
        if (time == 60){
            stopwatchMinBlock.textContent = Number(stopwatchMinBlock.textContent) + 1;
            stopwatchSecBlock.textContent = '00';
            time = 0;
        } else{
            if (String(time).length == 1){
                stopwatchSecBlock.textContent = '0' + time;
            } else{
                stopwatchSecBlock.textContent = time;
            }
        }
    }


    window.addEventListener('load', () => {
        start();
    })


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
        taskBlock.innerHTML = `<xmp class="task-block__task-text blue-bold-text">${task.question}</xmp>
        <div class="task-block__task-options task-options">`;
        if (task.rightAnswers.length == 1){
            taskBlock.innerHTML += `<label for="task${task.id}_0" class="task-options__task-option"><input type="radio" class="task-option__radio-input" name="taskId_${task.id}" value="${task.options[0]}" id="task${task.id}_0"><xmp class="task-option__option-text just-text">${task.options[0]}</xmp></label>

            <label for="task${task.id}_1" class="task-options__task-option"><input type="radio" class="task-option__radio-input" name="taskId_${task.id}" value="${task.options[1]}" id="task${task.id}_1"><xmp class="task-option__option-text just-text">${task.options[1]}</xmp></label>

            <label for="task${task.id}_2" class="task-options__task-option"><input type="radio" class="task-option__radio-input" name="taskId_${task.id}" value="${task.options[2]}" id="task${task.id}_2"><xmp class="task-option__option-text just-text">${task.options[2]}</xmp></label>
            
            <label for="task${task.id}_3" class="task-options__task-option"><input type="radio" class="task-option__radio-input" name="taskId_${task.id}" value="${task.options[3]}" id="task${task.id}_3"><xmp class="task-option__option-text just-text">${task.options[3]}</xmp></label>
            </div>`;
        } else {
            taskBlock.innerHTML += `<label for="task${task.id}_0" class="task-options__task-option"><input type="checkbox" class="task-option__checkbox" name="taskId_${task.id}" value="${task.options[0]}" id="task${task.id}_0"><xmp class="task-option__option-text just-text">${task.options[0]}</xmp></label>

            <label for="task${task.id}_1" class="task-options__task-option"><input type="checkbox" class="task-option__checkbox" name="taskId_${task.id}" value="${task.options[1]}" id="task${task.id}_1"><xmp class="task-option__option-text just-text">${task.options[1]}</xmp></label>

            <label for="task${task.id}_2" class="task-options__task-option"><input type="checkbox" class="task-option__checkbox" name="taskId_${task.id}" value="${task.options[2]}" id="task${task.id}_2"><xmp class="task-option__option-text just-text">${task.options[2]}</xmp></label>
            
            <label for="task${task.id}_3" class="task-options__task-option"><input type="checkbox" class="task-option__checkbox" name="taskId_${task.id}" value="${task.options[3]}" id="task${task.id}_3"><xmp class="task-option__option-text just-text">${task.options[3]}</xmp></label>
            </div>`;
        }


        console.log(taskBlock);
        // console.log(task);
        // console.log(index);
        testBlock.append(taskBlock);

        let taskPageBtn = document.createElement('button');
        taskPageBtn.classList.add('tasks-pagination__task-number', 'btn', `task-order_${index}`);
        taskPageBtn.textContent = index + 1;
        testPagination.append(taskPageBtn);
    });
}

export default fastTest;