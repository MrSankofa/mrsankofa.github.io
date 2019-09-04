const html = ({ body, title }) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
  </head>
  <body>
    <div id="app">${body}</div>
  </body>
    <script src="https://unpkg.com/react@16.8.6/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js"></script>
    <script>
      ReactDOM.hydrate(
        React.createElement(App),
        document.getElementById('app')
      );
    </script>
  </html>
`;

module.exports = html;