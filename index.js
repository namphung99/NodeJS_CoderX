const express = require('express');
const db = require('./db');

const userRoute = require('./routes/user.route')

const port = 8081;

const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // read req.body
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'))

app.get('/',(req, res)=>{
  res.render('index');
})

app.use('/user',userRoute)
app.listen(port, () => {
  console.log(`myPage listening at http://localhost:${port}`)
})