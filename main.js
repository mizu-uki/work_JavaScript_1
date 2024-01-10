// ーーースタートボタンーーー
function startTimer(){
    mill_intervalId = setInterval(countMillSecond, 100) 
    second_intervalId = setInterval(countSecond, 1000)
    minute_intervalId = setInterval(countMinute, 60000)
    hour_intervalId = setInterval(countHour, 360000)

    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    document.getElementById('reset').disabled = false;
}

// mill_secondのカウント
let elm_mill_second = document.getElementById('mill_second')
let count_mill_second = 0

function countMillSecond(){
    if(count_mill_second < 9){
        count_mill_second += 1
    }else{
        count_mill_second = 0
    }
    elm_mill_second.innerHTML = count_mill_second
}


// secondのカウント
let elm_second = document.getElementById('second')
let count_second = 0

function countSecond(){
    if(count_second < 59 ){
        count_second += 1
    }else{
        count_second = 0
    }
    elm_second.innerHTML = count_second
}

// minutesのカウント
let elm_minute = document.getElementById('minute')
let count_minute = 0

function countMinute(){
    if(count_minute < 59 ){
        count_minute += 1
    }else{
        count_minute = 0
    }
    elm_minute.innerHTML = count_minute
}

// hourのカウント
let elm_hour = document.getElementById('hour')
let count_hour = 0

function countHour(){
    count_hour += 1
    elm_hour.innerHTML = count_hour
}

// ーーーストップボタンーーー
function stopTimer(){
    clearInterval(mill_intervalId)
    clearInterval(second_intervalId)
    clearInterval(minute_intervalId)
    clearInterval(hour_intervalId)

    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
    document.getElementById('reset').disabled = false;
}

// ーーーリセットボタンーーー
function resetTimer(){
    count_mill_second = 0
    count_second = 0
    count_minute = 0
    count_hour = 0

    elm_mill_second.innerHTML = count_mill_second
    elm_second.innerHTML = count_second
    elm_minute.innerHTML = count_minute
    elm_hour.innerHTML = count_hour

    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
    document.getElementById('reset').disabled = true;

    clearInterval(mill_intervalId)
    clearInterval(second_intervalId)
    clearInterval(minute_intervalId)
    clearInterval(hour_intervalId)
}