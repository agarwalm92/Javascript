let start = false;
let hr=0;
let min=0;
let sec=0;
let milisec=0;
let count = 0;

function startwatch(){
    start = true;  
    incrementCount();
}

function incrementCount(){
    if(start){
        count++;
        document.getElementById("milisec").innerHTML = count;
    }

    if(count == 100){
        count = 0;
        sec++;
        if(sec < 10){
            document.getElementById("sec").innerHTML = "0" + sec;
        }
        else{
            document.getElementById("sec").innerHTML = sec;
        }
    }
    if(sec == 10){ 
        sec = 0;
        min++;
        if(min < 10){
            document.getElementById("min").innerHTML = "0" + min;
        }
        else{
            document.getElementById("min").innerHTML = min;
        }
    }


    setTimeout(incrementCount,10);
}

function stopwatch(){
    start = false;  
    incrementCount();
}