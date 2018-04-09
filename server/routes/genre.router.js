let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');

// GET-genres
router.get('/', (req, res) => {
    let queryText = `SELECT "g".*, count("m") as "current_movies" 
                    FROM "genres" as "g" LEFT JOIN "movies" as "m" 
                    ON "g"."id" = "m"."genre_id"
                    GROUP BY "g"."id";`;
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

// DELETE-genre
router.delete('/:id', (req, res) => {
    let genreId = req.params.id;
    let queryText = `DELETE FROM genres WHERE "id" = $1`;
    pool.query(queryText, [genreId])
        .then((response) => {
            console.log(response);
            res.sendStatus(201);
    }).catch((error) => {
        console.log('error deleting', error);
    }); 
}); //end DELETE-genre
module.exports = router;