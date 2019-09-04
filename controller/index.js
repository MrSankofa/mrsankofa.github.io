require('dotenv').config()
const express = require('express')
const morgan = require('morgan');
const path = require('path');
const { psqlRetrieveAll, psqlRetrieveOne } = require('../model/index.js');
const PORT = process.env.PORT || 3000;
const server = express();


server.use(morgan('dev'));

server.use(express.static(path.join(__dirname, '../view/public')));

// webpack library common js enables this.
const serverBundle = require('../view/public/server_bundle.js').default;

const React = require('react');
const ReactDOM = require('react-dom/server');
const html = require('../view/src/components/html')

const renderComponent = (props = {}) => {
  
  console.log('ReactDOM: ', ReactDOM);
  let component = React.createElement(serverBundle, props);
  return ReactDOM.renderToString(component);
}

server.get('/', (req, res) => {
  let component = renderComponent();
  res.end(html(
    'Apartment Searching',
    component
  ))

});

server.get('/items', (req, res) => {
  psqlRetrieveAll(req, res)
})

server.get('/items/:id', (req, res) => {
  psqlRetrieveOne(req, res);
})

server.listen(PORT);
console.log(`Serving at http://localhost:${PORT}`);