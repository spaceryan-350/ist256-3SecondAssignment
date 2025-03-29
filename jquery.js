$("#start").on("click", function(){
    let date = new Date()
    let second = date.getSeconds()
    let millisecond = date.getMillisecond()
    let result;
    if ($("#millisecond").val()== randomValue){
        alert("We have a match")
        result = "We have a match"
    }
    if ($("#number").val()== randomValue){
            alert("We have a match")
            result = "We have a match"
        }
        if ($("#number").val()== randomValue){
                alert("We have a match")
                result = "We have a match"
            }

    else
    { alert("Mismatch, correct value was " + randomValue)
    result = "Mismatch, correct value was " + randomValue
    }
    $("#result").append("<p>" + result + "</p>");
    });

});