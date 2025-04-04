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
let clickCounter = 0;
let totalAvg;
let totalAttempts;
let min;
let max;
let sum = 0;
var attempts = [];
var labels = [];
$("#result").hide();
$("#totalAttempts").hide();
$("#totalAvg").hide();
$("#min").hide();
$("#max").hide();

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
clickCounter += 1;
$("#start").val("Start");
        if (totalTime === time){
        $('body').css("background", "green");
            result = totalTime
            resultDisplay = totalTime
            $("#resultDisplay").text("Time: " + result);
            $("#result").append("<p>Attempt " + clickCounter + ": " + result + " | Start Time: " + time1.toFixed(2) + " | End Time: " + time2.toFixed(2) + "</p>");
            attempts.push(totalTime);
       }
        else if (Math.abs(totalTime - time).toFixed(2) <= 0.20){
        $('body').css("background", "blue");
               result = totalTime
               resultDisplay = totalTime
                  $("#resultDisplay").text("Time: " + result);
               $("#result").append("<p>Attempt " + clickCounter + ": " + result + " | Start Time: " + time1.toFixed(2) + " | End Time: " + time2.toFixed(2) + "</p>");
               attempts.push(totalTime);
            }
          else if (Math.abs(totalTime - time).toFixed(2) <= 0.50){
          $('body').css("background", "yellow");
                        result = totalTime
                        resultDisplay = totalTime
                        $("#resultDisplay").text("Time: " + result);
                       $("#result").append("<p>Attempt " + clickCounter + ": " + result + " | Start Time: " + time1.toFixed(2) + " | End Time: " + time2.toFixed(2) + "</p>");
                       attempts.push(totalTime);
                    }
        else{
        result = totalTime
        resultDisplay = totalTime
         $('body').css("background", "red");
         $("#resultDisplay").text("Time: " + result);
         $("#result").append("<p>Attempt " + clickCounter + ": " + result + " | Start Time: " + time1.toFixed(2) + " | End Time: " + time2.toFixed(2) + "</p>");
         attempts.push(totalTime);
         }
         var newLabel = 'Attempt ' + clickCounter;
         labels.push(newLabel);
         $("#resultDisplay").show();
         myChart.update();
         }

});


$("#times").on("click", function(){

if($("#times").val() == "Show"){

$("#result").show();
$("#times").val("Hide");
}
else if($("#times").val() == "Hide"){

$("#result").hide();
$("#times").val("Show");

}
});


$("#avg").on("click", function(){
let min = Math.min(...attempts);
let max = Math.max(...attempts);
if($("#avg").val() == "Show"){
for (let i = 0; i < attempts.length; i++) {
      sum += parseInt(attempts[i]);
    }
let totalAvg = sum / attempts.length;
$("#totalAttempts").text("Total Attempts: " + clickCounter);
$("#totalAvg").text("Average: " + totalAvg.toFixed(2));
$("#min").text("Min: " + min);
$("#max").text("Max: " + max);
$("#totalAttempts").show();
$("#totalAvg").show();
$("#min").show();
$("#max").show();
$("#avg").val("Hide");
}
else if($("#avg").val() == "Hide"){
$("#totalAttempts").hide();
$("#totalAvg").hide();
$("#min").hide();
$("#max").hide();
$("#avg").val("Show");

}
});
var ctx = $("#myChart");
 var data = {
 labels: labels,
 datasets: [{
label: "Time",
data: attempts,
fill: true,
tension: 0.1
 }]
 };
var options = {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };
 var myChart = new Chart(ctx, {
             type: "line",
             data: data,
             options: options
         });
});

