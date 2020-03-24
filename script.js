window.onload = function () {

    var apiKey = "3ecacdc43749b0d1697331f53d557613";
    var appId = "b81fa997";
    var cuisine = "portuguese";
    var queryURL = `https://api.edamam.com/search?q=${cuisine}&app_id=${appId}&app_key=${apiKey}&from=0&to=50`;

    function getRecipes() {

        $.ajax({

            url: queryURL,
            method: "GET"

        }).then(function (response) {

            // console.log(response) 
            for (var i = 0; i < response.hits.length; i++) {

                console.log(response.hits[i].recipe.label);
                console.log(response.hits[i].recipe.url);
                for (var j = 0; j < response.hits[i].recipe.ingredientLines.length; j++) {
                    console.log(response.hits[i].recipe.ingredientLines[j]);
                }
                console.log(response.hits[i].recipe.calories.toFixed(0));
                console.log(response.hits[i].recipe.yield);
            }
        })
    }

    getRecipes();

    //what is in common?
    // they all have a class of cities
    // before adding correct class, remove any existing class
    $('.cities').on('click', function(e) {
        $('body').removeClass();
        $('body').addClass(`${e.target.id}-background`);
    })

    var newO = $(".newO");
    newO.on("click", function () {
        var body = $("#body");
        body.addClass("newO-background");
    });

    var ny = $(".ny");
    ny.on("click", function() {
        var body = $("#body");
        body.addClass("ny-background");
    })

    var boston = $(".boston");
    boston.on("click", function() {
        var body = $("#body");
        body.addClass("boston-background");
    })

    var chi = $(".chi");
    chi.on("click", function() {
        var body = $("#body");
        body.addClass("chi-background");
    })

    var miami = $(".miami");
    miami.on("click", function() {
        var body = $("#body");
        body.addClass("miami-background");
    })

}

