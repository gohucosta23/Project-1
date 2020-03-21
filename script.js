
window.onload = function(){

var apiKey = "3ecacdc43749b0d1697331f53d557613";
var appId = "b81fa997";
var cuisine = "portuguese";
var queryURL = `https://api.edamam.com/search?q=${cuisine}&app_id=${appId}&app_key=${apiKey}&from=0&to=50`;    

function getRecipes(){

$.ajax({

    url : queryURL,
    method : "GET"

}).then(function(response){

    // console.log(response) 
    for (var i = 0; i < response.hits.length; i++){

        console.log(response.hits[i].recipe.label);
        console.log(response.hits[i].recipe.url);
            for (var j = 0; j < response.hits[i].recipe.ingredientLines.length; j++ ){
                console.log(response.hits[i].recipe.ingredientLines[j]);
            }
        console.log(response.hits[i].recipe.calories.toFixed(0));
        console.log(response.hits[i].recipe.yield);
}
})
}

getRecipes();


}