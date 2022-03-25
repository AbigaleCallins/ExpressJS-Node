const express = require('express');
// const path = require('path');


const app = express();


// app.get("/", (req, res) => {

//     res.send("Hello from the web server side...")


// });


app.use((req, res, next) => {
    console.log(req.url);
    next();
})
app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
  });
  app.get('/', (req, res) => {
    res.send('Successful klresponse.');
  });

// app.use(express.static(path.join(__dirname, "../public/index.html")));


// app.use('/express', path('public'));

app.listen(3000);