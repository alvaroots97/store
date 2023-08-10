const express = require('express');
const routerApi= require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
// const { faker } = require('@faker-js/faker');
const app = express();
const port = process.env.PORT || 3008;

app.use(express.json());

const whitelist = ['http://localhost:5500'];
const options = {
  origin: (origin, callback) => {
      if(whitelist.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed"));
      }
  }
}
app.use(cors(options));

app.get('/api', (req, res) => {
  res.send("I'm Alvaro Alva");
});

app.get('/api/new-route', (req, res) => {
  res.send("I'm a new route");
});

// Specific endpoints should come before the Dynamic filters


routerApi(app);

app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);


app.listen(port, () => {
  console.log("My port" + port);
});
