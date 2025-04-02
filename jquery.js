$(document).ready(function(){
let date = new Date()
    let time1;
    let time2;
    let totalTime;
    let seconds;
    let milliseconds;
    const time = 3;
    let result;

$("#start").on("click", function(){
console.log("Click1");


if($("#start").val() == "Start"){
let seconds = date.getSeconds()
let milliseconds = date.getMilliseconds()
time1 = seconds + (milliseconds / 1000);
console.log(time1);
$("#start").val("Stop");
$("#result").hide();
$('body').css("background", "white");
}


else if($("#start").val() == "Stop"){
$("#start").val("Start");
let seconds = date.getSeconds()
let milliseconds = date.getMilliseconds()
let time2 = seconds + (milliseconds / 1000);
console.log(time2);
let totalTime = Math.abs(time2 - time1)
console.log("Click2");


        if ($("#totalTime").val() === time){
        $('body').css("background", "green");
            result = totalTime
            $("#result").append("<p>" + result + "</p>");
       }
        else if ($("#totalTime").val()<= 0.2){
        $('body').css("background", "blue");
               result = totalTime
               $("#result").append("<p>" + result + "</p>");
            }
          else if ($("#totalTime").val()<= 0.5){
          $('body').css("background", "yellow");
                        result = totalTime
                        $("#result").append("<p>" + result + "</p>");
                    }
        else{
        result = totalTime
         $('body').css("background", "red");
         $("#result").append("<p>" + result + "</p>");
         $("#result").show();
         }
         }
});


});

