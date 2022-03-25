const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();

/* Create your own middleware using app.use that console.logs every 
req.url and passes flow to the next function */
app.use(express.urlencoded({ extended: false }));

app.post('/contact-form', (req,res, next) =>{
  console.log('Request type: ', req.method);

  console.log(req.body.email);
  console.log(req.body.name);
  res.send('Hello');
  next()
});


// // Expresss server , with root request
// app.get("/", (req, res) => {
//     res.send("Hello from the web server side...")
// });

// app.use((req, res, next) => {
//     console.log(req.url);
//     next();
// })
// app.use('/contact-form', (req, res, next) => {
//     console.log('Request type: ', req.method);
//     next();
//   });
//   app.get('/', (req, res) => {
//     res.send('success');
//   });

//   app.get("/formsubmissions", (req, res) => {
//     fs.readFile("formsubmissions.json", (err, data) => res.send(data));
// });

app.use(express.static(path.join(__dirname, "../public")));
// app.use('/express', path('public'));

app.listen(3000);