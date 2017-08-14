const fetch = require('node-fetch')

function fetchAvatarUrl(userId) {
    return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
        .then(response => response.json())
        .then(data => data.imageUrl)
}

const result = fetchAvatarUrl(123)
result 

async function asyncfetchAvatarUrl(userId) {
    const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    const data = await response.json()
    return data.imageUrl
}

const asyncResult = asyncfetchAvatarUrl(123)
asyncResult 

function fetchCatAvatars(userId) {
    return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const promises = user.cats.map(catId => 
                fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
                    .then(response => response.json())
                    .then(catData => catData.imageUrl)
            )
            return Promise.all(promises)
        })
}

const avatarResult = fetchCatAvatars(123)
avatarResult

