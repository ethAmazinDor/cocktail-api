const searchBtn = document.getElementById('search-btn')
const cocktailList = document.getElementById('cocktail') //the cocktail card 
const cockDetailContent = document.querySelector('.cock-details-content')
const recipeCloseBtn = document.getElementById('recipe-close-btn')


//event listeners 
searchBtn.addEventListener('click', getCocktailList) //event listener on searchBtn
cocktailList.addEventListener('click', getCocktailIngredients)


//get a cocktail list that matches with the ingredients/drinks
function getCocktailList() {
    let searchInputTxt = document.getElementById('search-input').value.trim()
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.drinks) {
                data.drinks.forEach(drink => {
                    html += `
                    <div class="cocktail-item" data-id= "${drink.idDrink}">
                        <div class="cocktail-img">
                            <img src="${drink.strDrinkThumb}" alt="">
                    </div>
                        <div class="cocktail-name">
                            <h3>${drink.strDrink}</h3>
                            <a href="#" class="recipe-btn">Get Ingredients</a>
                        </div>
                    </div>                   
                    `;
                })
            } else {
                html = "Sorry, we couldn't find a drink.";
                cocktailList.classList.add('notFound')
            }

            cocktailList.innerHTML = html;
        });
}

//get the ingredients of the cocktail 

function getCocktailIngredients(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
        let cockItem = e.target.parentElement.parentElement
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cockItem.dataset.id}`)
            .then(response => response.json())
            .then(data => cocktailRecipeModal(data.drinks))
    }
}


//create a modal 

function cocktailRecipeModal(drink) {

    drink = drink[0]

    let html = `
                    <h2 class="recipe-title">${drink.strDrink}</h2>
                    <p class="recipe-category">${drink.strCategory}</p>
                    <div class="recipe-instruct">
                        <h3>Instructions</h3>
                        <p>${drink.strInstructions}</p>
                    </div>
                    <div class="recipe-cock-img">
                        <img src="${drink.strDrinkThumb}" alt="">
                    </div>
                    <div class="recipe-link">
                        <a href="#" target="_blank">Watch</a>
                    </div>
                
    `;

    cockDetailContent.innerHTML = html
    cockDetailContent.parentElement.classList.add('showRecipe')



}