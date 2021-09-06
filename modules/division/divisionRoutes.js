let express = require('express');
let router = express.Router();
let divisionController = require('./divisionController.js');

/*
 * GET
 */
router.get('/', divisionController.list);

/*
 * GET
 */
router.get('/:id', divisionController.show);

/*
 * POST
 */
router.post('/', divisionController.create);

/*
 * PUT
 */
router.put('/:id', divisionController.update);

/*
 * DELETE
 */
router.delete('/:id', divisionController.remove);

module.exports = router;
