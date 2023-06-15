const express = require('express')
const app = express()

app.use(express.json());

let apiRouter = express.Router()

apiRouter.get('/users', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ hello: "world" }));
})

apiRouter.get('/users/:groups/:id', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ hello: req.params.groups + " world " + req.params.id}))
})

app.use('/api', apiRouter)

// Middleware to serve static files
app.use(express.static('../frontend'));

// Start the server
app.listen(3000, () => {
  console.log('App is listening on port 3000');
});