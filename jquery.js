$(document).ready(function(){
let date;
let time1;
let time2;
let totalTime;
let seconds;
let milliseconds;
const time = 3.00;
let result;
let resultDisplay;

$("#start").on("click", function(){


if($("#start").val() == "Start"){
let date = new Date()
let seconds = date.getSeconds()
let milliseconds = date.getMilliseconds()
time1 = seconds + (milliseconds/1000)
$("#start").val("Stop");
$("#resultDisplay").hide();
$('body').css("background", "white");
}


else if($("#start").val() == "Stop"){
let date = new Date()
let seconds = date.getSeconds()
let milliseconds = date.getMilliseconds()
let time2 = seconds + (milliseconds/1000)
let totalTime = Math.abs(time2 - time1).toFixed(2)
$("#start").val("Start");

        if (totalTime === time){
        $('body').css("background", "green");
            result = totalTime
            resultDisplay = totalTime
            $("#resultDisplay").text("Time: " + result);
            $("#result").append("<p>" + result + "</p>");
       }
        else if (Math.abs(totalTime - time).toFixed(2) <= 0.20){
        $('body').css("background", "blue");
               result = totalTime
               resultDisplay = totalTime
                  $("#resultDisplay").text("Time: " + result);
               $("#result").append("<p>" + result + "</p>");
            }
          else if (Math.abs(totalTime - time).toFixed(2) <= 0.50){
          $('body').css("background", "yellow");
                        result = totalTime
                        resultDisplay = totalTime
                        $("#resultDisplay").text("Time: " + result);
                        $("#result").append("<p>" + result + "</p>");
                    }
        else{
        result = totalTime
        resultDisplay = totalTime
         $('body').css("background", "red");
         $("#resultDisplay").text("Time: " + result);
         $("#result").append("<p>" + result + "</p>");
         }
         $("#resultDisplay").show();
         }
});


});

