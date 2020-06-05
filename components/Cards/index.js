// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

//object.data.articles.boostrap[0-2].headline, authorPhoto, authorName

function makeArticle(article){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgCont = document.createElement('div')
    const authorPic = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgCont.classList.add('img-container')

    headline.textContent = article.headline
    authorName.textContent = article.authorName
    authorPic.src = article.authorPhoto

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgCont)
    imgCont.appendChild(authorPic)
    author.appendChild(authorName)

    document.querySelector('.cards-container').appendChild(card)
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    // console.log(response)
    response.data.articles.bootstrap.forEach(article =>{
        makeArticle(article)
    })
    response.data.articles.javascript.forEach(article =>{
        makeArticle(article)
    })
    response.data.articles.jquery.forEach(article =>{
        makeArticle(article)
    })
    response.data.articles.node.forEach(article =>{
        makeArticle(article)
    })
    response.data.articles.technology.forEach(article =>{
        makeArticle(article)
    })
})
.catch(error =>{
    console.log(error)
})