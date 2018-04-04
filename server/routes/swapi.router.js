let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js')

router.get('/', (req, res) => {
    //get data in an array and send back
    let queryText = 'SELECT * FROM starwars';
    pool.query(queryText).then((result) => {
        const responseArray = result.rows;
        console.log(responseArray);
        res.send(result.rows);
    })
});

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