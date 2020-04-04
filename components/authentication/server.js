const express = require('express');
const app = express();

// Set view engine to EJS
app.set('view-engine', 'ejs');

// Creating routes
// @GET Request -> homepage (only if authenticated otherwise redirected to login)
app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Alex van Stenhoven' });
});

// Start the Server on port 3000
app.listen(3000, () => { console.log('[ [+] SERVER ] starting on http://localhost:3000'); });