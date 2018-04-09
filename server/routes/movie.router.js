let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js')


// GET movies from SQL DB
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM movies`;
    //JOIN genres ON movies.genre_id = genres.id;
    pool.query(queryText).then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    })
}); // end routerGET movies





// POST/ADD new movie
router.post('/', (req, res) => {
    let movie = req.body;
    console.log('Router Post', movie);
    const queryText = `INSERT INTO movies (name, pic, release_date, genre_id, run_time) 
                        VALUES ($1, $2, $3, $4, $5);`
    pool.query(queryText, [movie.name, movie.pic, movie.release_date, movie.genre_id, movie.run_time])
        .then((response) => {
            console.log(response);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('ERROR ON INSERT', error);
        });
})// end ADD movie



// DELETE movie
router.delete('/:id', (req, res) => {
    let movieId = req.params.id;
    let queryText = `DELETE FROM movies WHERE "id" = $1`;
    pool.query(queryText, [movieId])    
        .then((response) => {
            console.log(response);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('ERROR ON DELETE', error);
        });
});// end DELETE movie


module.exports = router;