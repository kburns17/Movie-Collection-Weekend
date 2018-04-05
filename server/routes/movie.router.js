let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js')


// GET movies from SQL DB
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM movies';
    pool.query(queryText).then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    })
}); // end routerGET




// POST NEW data
router.post('/', (req, res) => {
    let swapi = req.body;
    const queryText = `INSERT INTO swapi (Name, Film-1, People-1) VALUES ($1, $2, $3);`
    pool.query(queryText, [swapi.name, swapi.type, swapi.score])
        .then((response) => {
            console.log(response);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('ERROR ON INSERT', error);
        });
})

//DELETE
router.delete('/', (req, res) => {
    let swapi = req.body;
    let queryText = `DELETE FROM "starwars" WHERE "id" = $1`;
    pool.query(queryText, [swapi.id])
        .then((response) => {
            console.log(response);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('ERROR ON DELETE', error);
        });
});


module.exports = router;