let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');

// GET-genres
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM genres';
    pool.query(queryText).then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    });
}); // end routerGET genres

// POST/ADD new genre
router.post('/', (req, res) => {
    let genre = req.body;
    let queryText = 'INSERT INTO genres (genre) VALUES ($1)';
    pool.query(queryText, [genre.genre]).then((result) => {
        console.log(result);
        res.sendStatus(201);
    }).catch((error) =>{
        console.log(error);
        res.sendStatus(500);
    });
}); // end POST-genre



module.exports = router;