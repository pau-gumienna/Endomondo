const express = require('express');
const path = require('path');
const axios = require('axios');
es6Renderer = require('express-es6-template-engine');

const app = express();

//load view engine
app.engine('html', es6Renderer);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(__dirname));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  next();
});

app.get('/bikingChallenge', (req, res) => {
  const iframeWidth = req.query.width;
  res.setHeader('Content-Type', 'text/html');
  axios
    .get(
      'https://www.endomondo.com/embed/challenge?id=40181526&user=15299150&measure=0&width=' +
        iframeWidth +
        '&height=800'
    )
    .then(response => {
      bodyContent = response.data.slice(
        response.data.search('<body>') + 6,
        response.data.search('</body>')
      );
      res.end(bodyContent);
    })
    .catch(error => console.log(error));
});
app.get('/runningChallenge', (req, res) => {
  const iframeWidth = req.query.width;
  res.setHeader('Content-Type', 'text/html');
  axios
    .get(
      'https://www.endomondo.com/embed/challenge?id=40181532&user=15299150&measure=0&width=' +
        iframeWidth +
        '&height=800'
    )
    .then(response => {
      bodyContent = response.data.slice(
        response.data.search('<body>') + 6,
        response.data.search('</body>')
      );
      res.end(bodyContent);
      res.end(response.data);
    })
    .catch(error => console.log(error));
});

app.get('/othersChallenge', (req, res) => {
  const iframeWidth = req.query.width;
  res.setHeader('Content-Type', 'text/html');
  axios
    .get(
      'https://www.endomondo.com/embed/challenge?id=40181520&user=15299150&measure=0&width=' +
        iframeWidth +
        '&height=800'
    )
    .then(response => {
      bodyContent = response.data.slice(
        response.data.search('<body>') + 6,
        response.data.search('</body>')
      );
      res.end(bodyContent);
    })
    .catch(error => console.log(error));
});

app.get('/', function(req, res) {
  res.render('index');
});
app.listen(4000);
