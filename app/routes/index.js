let express = require('express');

let exampleRoutes = require('../controllers/example');

let router = express.Router();


/***
 * GET /
 * @returns: {HTML} renders welcome page
 */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/***
 * GET /hello
 * @type {Router}
 */
router.get('/hello', exampleRoutes.hello);

module.exports = router;
