

function getRandomCocktails() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            //console.log(data)
            displayRandomCocktail(data)


        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}

getRandomCocktails()

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0])

    let drinkSection = document.querySelector('#drink-section')

    let drinkName = document.createElement('h2')
    drinkName.innerHTML = cocktail.drinks[0].strDrink

    drinkSection.appendChild(drinkName)

    let img = document.querySelector('img')
    img.src = cocktail.drinks[0].strDrinkThumb
    drinkSection.appendChild(img)

    for (let i = 1; i < 16; i++) {
        if (cocktail.drinks[0][`strIngredient${i}`] === null) {
            break;
        }

        let ingredient = document.createElement('li')
        ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ':' + cocktail.drinks[0][`strIngredient${i}`]
        drinkSection.appendChild(ingredient)
    }

    let card = document.createElement('ons-card')
    card.innerHTML = cocktail.drinks[0].strInstructions

    drinkSection.appendChild(card)

}