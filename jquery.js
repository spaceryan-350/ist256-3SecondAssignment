$(document).ready(function(){
let date = new Date()
    let time1;
    let time2;
    let totalTime;
    const time = 3;
    let result;

$("#start").on("click", function(){
console.log("Click1");


if($("#start").val() == "Start"){
let time1 = date.getSeconds() + date.getMilliseconds()
$("#start").val("Stop");
}


else if($("#start").val() == "Stop"){
$("#start").val("Start");
let time2 = date.getSeconds() + date.getMilliseconds()
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
         }
         }
});


});

