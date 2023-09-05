document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var btns = document.querySelectorAll("button");
        for(var i = 0; i < btns.length; i++){
            btns[i].style.display = "block"
        }
    }, 465000); // 465000 milliseconds or 7 minutes 45 seconds
});
