let img = document.querySelector('img')
let button = document.querySelector('.btn-primary')
let h5 = document.querySelector('.card-title')
//let cardText = document.querySelector('.card-text')

let form = document.querySelector('#form-1')
let textInput = document.querySelector('#text-input')
let displayResponse = document.querySelector('#display-response')
let displayResponse2 = document.querySelector('#display2-response')
let displayResponse3 = document.querySelector('#display3-response')

h5.innerText = 'Random Dog'
//cardText.innerText = 'click the button to generate a random dog image from the API call'
button.innerText = "press here"

//for random dog
button.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
        return response.json()
    }).then((data) => {
        img.src = data.message
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let url = `https://goweather.herokuapp.com/weather/${textInput.value}`
    console.log(url)
    fetch(encodeURI(url))
    .then((response) => {
        return response.json()
    }).then((data2) => {
        console.log(data2)
        displayResponse.innerText = data2.temperature,
        displayResponse2.innerText = data2.wind,
        displayResponse3.innerText = data2.description
    })
})

