const express = require("express");
const app = express();
const blogPostsRouter = require("./blogRouter");

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.get('/contact', (req, res) => {
  res.send('Welcome to the contact page!');
})

app.get('/portfolio', (req, res) => {
  res.send('Welcome to the portfolio page!');
})

app.use('/blog', blogPostsRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
