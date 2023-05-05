const express = require('express')
const morgan = require('morgan')
const postBank = require('./postBank')
// express.static(root, [options])
console.log(postBank)
// const list = list('nodemon')

const app = express()

app.use(morgan('dev'))
app.use(express.static('public'))

app.get('/', (req, res) => {
  const posts = postBank.list()

  //then preare some html to send as Output
  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts
        .map(
          (post) => `
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>
            <a href="/posts/${post.id}">${post.title}</a>
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>`,
        )
        .join('')}
    </div>
  </body>
</html>`

  res.send(html)
})

app.get('/posts/:id', (req, res) => {
  const posts = postBank.list()
  const id = req.params.id
  const post = postBank.find(id)

  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News
      </header>
<h3>${post.title}</h3>
<p>${post.content}</p>
    </div>
  </body>
</html>`
  if (!post.id) {
    // If the post wasn't found, just throw an error
    throw new Error('Sorry, Not Found')
  }
  // ... Otherwise, send the regular post detail HTML
  res.send(html)
})
app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(`<h1>${err.message}</h1>`)
})

const { PORT = 1337 } = process.env

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})
