

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
