const searchBtn = document.getElementById('search-btn')
const cocktailList = document.getElementById('cocktail')
const cockDetailCotent = document.querySelector('recipe-close-btn')
const recipeCloseBtn = document.getElementById('recipe-close-btn')


//event listeners 
searchBtn.addEventListener('click', getCocktailList)


//get a cocktail list that matches with the ingredients 
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
            }

            cocktailList.innerHTML = html;
        });
}

