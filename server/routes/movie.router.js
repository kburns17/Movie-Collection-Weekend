let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js')


// GET movies from SQL DB
router.get('/', (req, res) => {
    let queryText = `SELECT "m"."name" as "movies_name", 
    "m"."id" as "movies_id",
    "m"."pic" as "movies_pic", 
    "m"."release_date" as "movies_release_date",
    "m"."run_time" as "movies_run_time",
    "m"."genre_id" as "movies_genre_id",
    "g"."genre" as "genre"
    FROM "movies" as "m" JOIN "genres" as "g" 
    ON "m"."genre_id" = "g"."id"`;
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