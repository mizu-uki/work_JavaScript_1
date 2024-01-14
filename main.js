$(document).ready(function(){
    mill_second_value = 0
    second_value = 0
    minute_value = 0
    hour_value = 0
    
    // スタートボタン
    $("#start").click(function(){
        IntervalId = setInterval(countTime, 100)
        $("#start").prop('disabled', true)
        $("#stop").prop('disabled', false)
        $("#reset").prop('disabled', false)
    })
    
    // 経過時間カウント（ミリ秒）
    let elapsedTime = 0
        // let elapsedTime = 100 * 10 *60 *60 - 2000
    function countTime(){
        elapsedTime += 100
        console.log(elapsedTime)
        
        updateTime(elapsedTime)
    }
    
    function updateTime(time){
        mill_second_value = (time % 1000) / 100
        second_value = Math.floor(time / 1000) % 60
        minute_value = Math.floor(time / 1000 /60) % 60
        hour_value = Math.floor(time / 1000 / 60 / 60)
        
        
        $("#mill_second").text(mill_second_value)
        $("#second").text(second_value)
        $("#minute").text(minute_value)
        $("#hour").text(hour_value)
    }
    
    // ストップボタン
    $("#stop").click(function(){
        clearInterval(IntervalId)
        
        $("#start").prop('disabled', false)
        $("#stop").prop('disabled', true)
        $("#reset").prop('disabled', false)
    })
    
    // リセットボタン
    $("#reset").click(function(){
        clearInterval(IntervalId)
        
        elapsedTime =  0
        
        mill_second_value = 0
        second_value = 0
        minute_value = 0
        hour_value = 0
        
        $("#mill_second").text(mill_second_value)
        $("#second").text(second_value)
        $("#minute").text(minute_value)
        $("#hour").text(hour_value)
        
        $("#start").prop('disabled', false)
        $("#stop").prop('disabled', true)
        $("#reset").prop('disabled', true)
    })
    
    
    
})

