const express = require('express');
const path = require('path');
// const fs = require('fs');

const app = express();

// server that responds to the root get request
app.get("/", (req, res) => {

    res.send("Hello from the web server side...")

});

// Use express.static to serve files from a folder named public in the root of your project.

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.use(express.static(path.join(__dirname, "../public")));

// app.get('/', (req, res) => {
//   res.send('"Hello from the web server side...".');
// });



app.use('/express', path('public'));

app.listen(3000);