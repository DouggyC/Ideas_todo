npm i express
npm i express-handlebars

npm i mongoose
app.js >
const mongoose = require('mongoose');
> Connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

npm i body-parser
app.js > 
require
> Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

npm i method-override
app.js >
> require module
> add middleware

npm i express-session
app.js >
> require module
> add middleware

npm i connect-flash
app.js >
> require module
> add middleware

npm i bcryptjs
> require

npm i passport passport-local