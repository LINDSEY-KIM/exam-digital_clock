

    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var seconds = document.getElementById("seconds");


    var clock = setInterval(
        function time (){
            let date_now = new Data();
            let hr = date_now.getHours();
            let min = date_now.getMinutes();
            let sec = date_now.getSecounds();

            if(hr < 10){
                hr = "0" + hr;
            }
            if(min < 10){
                min = "0" + min;
            }
            if(sec < 10){
                sec = "0" + sec;
            }

            hour.textContent = hr;
            minute.textContent = min;
            seconds.textContent = sec;

        },1000
    );

