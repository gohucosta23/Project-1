
    // $(window).on('load', function () {
    //     localStorage.getItem("cocktailBtn", cocktailBtn);
    // })

    $(document).ready(function () {
        $('.carousel').carousel();

    });

    var cocktailSearch = $("#cocktailSearch");
    var recipes = $(".recipes");
    var drinkHits = $(".drink-hits");

    recipes.hide();

    function drinkSearch(cocktailName) {
        var cocktailInput = $("#cocktailInput");
        cocktailName = cocktailInput.val();
        console.log(cocktailName);
        var drinkQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName;

        $(".drink-hits").empty();
        $(".images").empty();


        $.ajax({
            url: drinkQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var arrLength = Math.min(response.drinks.length, 5);

            var recipes = $(".recipes");

            recipes.show();

            for (var i = 0; i < arrLength; i++) {
                var drinkHits = $(".drink-hits");
                var drink = $("<div>");
                drink.addClass("drink-container-style")
                var drinkListItem = $("<p>");
                drinkListItem.text(cocktail);
                var cocktail = response.drinks[i].strDrink;
                var instructions = response.drinks[i].strInstructions;

                // var drinkKeys = Object.keys(response.drinks[i]);
                // lines 183-194 until able to fix - these lines print ingredients to page
                // for (var j = 0; j < drinkKeys.length; j++) {
                //     var drinkProperty = response.drinks[i][drinkKeys[j]];
                //     if (drinkProperty && drinkKeys[j].indexOf("strIngredient") !== -1) {
                //         console.log(drinkProperty);
                //         var ingredientDiv = $("<ul>");
                //         var ingredientItem = $("<li>");
                //         ingredientItem.addClass("ingredient-list");
                //         ingredientItem.append(drinkProperty)
                //         ingredientDiv.append(ingredientItem);
                //         ingredientDiv.text(drinkProperty);
                //         drinkHits.append(ingredientDiv);
                //     }
                // }

                drink.text(cocktail + ": " + instructions);
                drinkHits.append(drink);
                var card = $(".images");
                var image = $("<img>");

                var choice = response.drinks[i].strDrinkThumb;
                image.attr("src", choice);
                image.addClass("cocktail-image");
                var carouselItem = $(".carousel-item");
                // originally appended to card
                card.append(image);

            }

        });


        var cocktailBtn = $("<button>");
        cocktailBtn.addClass("btn btn-primary")

        cocktailBtn.on("click", function () {
            var drinkHits = $(".drink-hits");
            var drink = $("<div>");
            drink.addClass("drink-container-style")
            var drinkListItem = $("<p>");
            drinkListItem.text(cocktail);
            var cocktail = response.drinks[i].strDrink;
            var instructions = response.drinks[i].strInstructions;
            drink.text(cocktail + ": " + instructions);
            drinkHits.append(drink);
            var card = $(".images");
            var image = $("<img>");
            var choice = response.drinks[i].strDrinkThumb;
            image.attr("src", choice);
            image.addClass("cocktail-image");
            var carouselItem = $(".carousel-item");
            card.append(image);

        });

    };

    cocktailSearch.on("click", function () {
        drinkSearch();
    });

    var favClick = $("#add-fav-click");
    favClick.on("click", function () {

        let myFavorites = [];

        // var cocktailInput = $("#cocktailInput");
        var cocktailName = cocktailInput.val();
        // var drinkHistory = $(".drink-history");
        // var li = $("<li>");
        // var cocktailBtn = $("<button>");
        // cocktailBtn.addClass("fav-btn btn btn-primary");
        // cocktailBtn.attr("value", cocktailName);
        // $(#).text(cocktailName);
        // li.append(cocktailBtn);
        // li.addClass("history-list");
        // drinkHistory.append(li);
        myFavorites.push(cocktailName);
        prompt(myFavorites)
        var button1= $('#1')
        button1.removeClass("hide");
        button1.text(myFavorites);

    
        

// for (var i=0;i<myFavorites.length;i++){
//     $("#"+i).text(cocktailName);
//         localStorage.setItem("myCocktail"+i, cocktailName);
//         localStorage.setItem("cocktailBtn"+i, cocktailBtn);
//         console.log(localStorage);
//         console.log(cocktailBtn);
//     }
    });

    $(document).on("click", ".fav-btn", function () {
        var cocktailValue = $(this).attr("value");
        console.log(cocktailValue);
        var drinkQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailValue;

        $(".drink-hits").empty();
        $(".images").empty();


        $.ajax({
            url: drinkQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var arrLength = Math.min(response.drinks.length, 5);

            var recipes = $(".recipes");

            recipes.show();

            for (var i = 0; i < arrLength; i++) {
                var drinkHits = $(".drink-hits");
                var drink = $("<div>");
                drink.addClass("drink-container-style")
                var drinkListItem = $("<p>");
                drinkListItem.text(cocktail);
                var cocktail = response.drinks[i].strDrink;
                var instructions = response.drinks[i].strInstructions;

                // var drinkKeys = Object.keys(response.drinks[i]);
                // lines 183-194 until able to fix - these lines print ingredients to page
                // for (var j = 0; j < drinkKeys.length; j++) {
                //     var drinkProperty = response.drinks[i][drinkKeys[j]];
                //     if (drinkProperty && drinkKeys[j].indexOf("strIngredient") !== -1) {
                //         console.log(drinkProperty);
                //         var ingredientDiv = $("<ul>");
                //         var ingredientItem = $("<li>");
                //         ingredientItem.addClass("ingredient-list");
                //         ingredientItem.append(drinkProperty)
                //         ingredientDiv.append(ingredientItem);
                //         ingredientDiv.text(drinkProperty);
                //         drinkHits.append(ingredientDiv);
                //     }
                // }

                drink.text(cocktail + ": " + instructions);
                drinkHits.append(drink);
                var card = $(".images");
                var image = $("<img>");

                var choice = response.drinks[i].strDrinkThumb;
                image.attr("src", choice);
                image.addClass("cocktail-image");
                var carouselItem = $(".carousel-item");
                // originally appended to card
                card.append(image);

            }

        });


        var cocktailBtn = $("<button>");
        cocktailBtn.addClass("btn btn-primary")

        cocktailBtn.on("click", function () {
            var drinkHits = $(".drink-hits");
            var drink = $("<div>");
            drink.addClass("drink-container-style")
            var drinkListItem = $("<p>");
            drinkListItem.text(cocktail);
            var cocktail = response.drinks[i].strDrink;
            var instructions = response.drinks[i].strInstructions;
            drink.text(cocktail + ": " + instructions);
            drinkHits.append(drink);
            var card = $(".images");
            var image = $("<img>");
            var choice = response.drinks[i].strDrinkThumb;
            image.attr("src", choice);
            image.addClass("cocktail-image");
            var carouselItem = $(".carousel-item");
            card.append(image);

        });


    });



    // trying to make list item button create a confirm

    var cocktailInput = $("#cocktailInput");
    var cocktailName = cocktailInput.val();
    var drinkHistory = $(".drink-history");
    var li = $("<li>");
    var cocktailBtn = $("<button>");
    cocktailBtn.addClass("btn btn-primary");

    cocktailBtn.on("click", function () {
        console.log("clicked");



    });
