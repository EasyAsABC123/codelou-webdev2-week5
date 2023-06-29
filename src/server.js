require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json());

let apiRouter = express.Router()

apiRouter.get('/forecast/:location', (req, res, next) => {
  fetch(`http://dataservice.accuweather.com/currentconditions/v1/${req.params.location}?apikey=${process.env.ACCUWEATHER_API_KEY}`)
  .then(response => {
    response.json()
      .then(json => {
        if (json.Code) {
          res.send({"value": "Error", "unit": "None"})
          return
        }

        returnObject = {
          "value": json[0].Temperature.Imperial.Value, 
          "unit": json[0].Temperature.Imperial.Unit
        }
        
        console.log(returnObject)
        res.send(returnObject)
      })
  })
  .catch(error => {
    console.error(error)
  })
})

apiRouter.get('/users', (req, res, next) => {
  console.log(process.env.SUPER_SECRET_ALL_THE_BASES_BELONG_TO_US)
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