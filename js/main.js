

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        //console.log(data)
        console.log(data.drinks[0])
    })
    .catch(err => {
        console.log(`error ${err}`)
    });





//PULL TO REFRESH 
