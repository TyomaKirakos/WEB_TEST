const stopwatch = () => {
    const stopwatchMinBlock = document.querySelector('.test-stopwatch__minutes');
    const stopwatchSecBlock = document.querySelector('.test-stopwatch__seconds');

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
}

export default stopwatch;