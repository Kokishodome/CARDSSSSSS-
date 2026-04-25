let cards = document.getElementById('cards')
let pair = []
let attempts = document.getElementById('attempts')
let attemptsCounter = 0
let goodLuck = document.getElementById('goodLuck')
let tryAgain = document.getElementById('tryAgain')
let images = [
    'blackBlack.jfif',
    'sixseven.jfif',
    'cat.jfif',
    "lala.jfif",
    'no.jfif',
    'absolutely.jfif',
    'download (2).jfif',
    'download (3).jfif',
    'download (4).jfif',
    'download.jfif',
    'skull necklace.jfif',
    'twtwocute.jfif',
    'blackBlack.jfif',
    'sixseven.jfif',
    'cat.jfif',
    "lala.jfif",
    'no.jfif',
    'absolutely.jfif',
    'download (2).jfif',
    'download (3).jfif',
    'download (4).jfif',
    'download.jfif',
    'skull necklace.jfif',
    'twtwocute.jfif'
]

tryAgain.onclick = function () {
    images.sort(function () {
        return Math.random() - 0.5
    })
    let playingCards = document.getElementsByClassName('card')
    for (let i = 0; i < 24; i++) {
        playingCards[i].style.transform = 'scaleX(0)'
        setTimeout(() => {
            playingCards[i].style.transform = 'scaleX(1)'
            playingCards[i].src = 'download (1).jfif'
            // cards.style.pointerEvents = 'auto'
        }, 300);
    }
    attemptsCounter = 0
    attempts.innerHTML = 'attempts: ' + attemptsCounter
}

images.sort(function () {
    return Math.random() - 0.5
})




for (let i = 0; i < 24; i++) {
    let img = document.createElement('img')
    img.className = 'card'
    img.src = 'download (1).jfif'
    cards.appendChild(img)
    img.onclick = function () {
        img.style.transform = 'scaleX(0)'
        setTimeout(() => {
            img.style.transform = 'scaleX(1)'
            img.src = images[i]
            console.log(pair[0], img, pair[0] === img);
            if (pair[0] !== img) {
                pair.push(img)
            }
            console.log(pair[0], pair[1]);
            if (pair.length == 2) {
                attemptsCounter++
                attempts.innerHTML = 'attempts: ' + attemptsCounter
                if (pair[0].src == pair[1].src) {
                    pair = []
                }
                else {
                    cards.style.pointerEvents = 'none'
                    setTimeout(() => {
                        pair[0].style.transform = 'scaleX(0)'
                        pair[1].style.transform = 'scaleX(0)'
                        setTimeout(() => {
                            pair[0].style.transform = 'scaleX(1)'
                            pair[0].src = 'download (1).jfif'
                            pair[1].style.transform = 'scaleX(1)'
                            pair[1].src = 'download (1).jfif'
                            cards.style.pointerEvents = 'auto'
                            pair = []
                        }, 300);

                    }, 1000);
                }
            }
        }, 300);
    }
}

// there is one image that repeats, find it and change it to another :)