const app = require('./server/server');

app.listen(process.env.PORT || 5000, () => {
  console.log('Listening');
});
