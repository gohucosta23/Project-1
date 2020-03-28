$(document).ready(function(){
    $('.slider').slider();
  });
    
        $(document).ready(function () {
            var recipeBtn = $("#buttons1");
            var drinkBtn = $("#buttons2");

            recipeBtn.on("click", function () {
                window.location = "recipes.html";
            })

            drinkBtn.on("click", function () {
                window.location = "index-copy-2.html";
            })
            

            function blink() {


                if ($("#sign").css("border-color") === "rgb(255, 255, 255)") {

                    $("#sign").css("border-color", "yellow");
                }
                else {

                    $("#sign").css("border-color", "rgb(255, 255, 255)");
                }

            }
            setInterval(blink, 500);
        });