$(document).ready(function(){
let date = new Date()
    let time = date.getSeconds() + date.getMilliseconds()
    let time1 = 0
    let totalTime;
    let result;

$("#start").click(function(){
console.log(event);
if (time1 === 0){
let time1 = time
$(this).text("Start")
}
else{
let time2 = date.getTime()
    $(this).text("Start")
        if ($("#totalTime").val()=== 3.0){
        $('body').css("background", "green");
        let totalTime = Math.abs(time2 - time1)
            result = totalTime
        }
        else if ($("#totalTime").val()<= 0.2){
        $('body').css("background", "blue");
        let totalTime = Math.abs(time2 - time1)
               result = totalTime
            }
          else if ($("#totalTime").val()<= 0.5){
          $('body').css("background", "yellow");
          let totalTime = Math.abs(time2 - time1)
                        result = totalTime
                    }
        else{
        result = totalTime
         $('body').css("background", "red");
         }
         $("#result").append("<p>" + result + "</p>");
}
    });


});

