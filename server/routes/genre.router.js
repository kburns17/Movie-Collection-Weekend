let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM genres';
    pool.query(queryText).then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    });
}); // end routerGET genres




module.exports = router;