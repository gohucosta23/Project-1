$(document).ready(function(){

    var recipeBtn = $("#buttons1");
    var drinkBtn = $("#buttons2");

    recipeBtn.on("click", function(){
        window.location = "recipes.html";
    })

    drinkBtn.on("click", function(){
        window.location = "Jake-file.html";
    })        
     
    recipeBtn.mouseenter(function(){
       
        $(this).children("div").text("Click here for recipes").attr("class", "text1");

    }).mouseleave(function(){

        $(this).children("div").text("HUNGRY?").attr("class", "text2");
    })

    drinkBtn.mouseenter(function(){
        
        $(this).children("div").text("Click here for Drinks").attr("class", "text1"); 

    }).mouseleave(function(){
        
        $(this).children("div").text("THIRSTY?").attr("class", "text2");
    })

   function flash(){

        
         if($("#sign").css("border-color") === "rgb(255, 255, 255)"){

             $("#sign").css("border-color", "yellow");
         }
        else {         

            $("#sign").css("border-color", "rgb(255, 255, 255)");
         }
                    
    }
   setInterval(flash, 500);
});