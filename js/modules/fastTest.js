let fastTest = () => {
    let tasks = JSON.parse(localStorage.tasks);
    let taskNumber = Math.floor(Math.random() * (tasks.length));
    tasks.splice(taskNumber, 1);
    console.log(taskNumber);

    console.log(tasks);
    // let fastTestTasks = 
}

export default fastTest;