let cards = document.getElementById('cards')
let pair = []
let images = ['stop.jfif',
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
    'stop.jfif',
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

for (let i = 0; i < 24; i++) {
    let img = document.createElement('img')
    img.src = 'download (1).jfif'
    cards.appendChild(img)
    img.onclick = function () {
        console.log(i);
        img.src = images[i]
        pair.push(img)
        console.log(pair);
        if (pair.length == 2) {
            setTimeout(() => {
                pair[0].src = 'download (1).jfif'
                pair[1].src = 'download (1).jfif'

            }, 1000);
        }
    }
}

