let express = require('express');

let controllers = require('../controllers');

let router = express.Router();


/***
 * GET /
 * @returns: {JSON} sends a hello message
 */
router.get('/', controllers.hello);

module.exports = router;
