var express = require('express');
var router = express.Router();
var logController = require('./logController.js');

/*
 * GET
 */
router.get('/', logController.list);

/*
 * GET
 */
router.get('/:id', logController.show);

/*
 * POST
 */
router.post('/', logController.create);

/*
 * PUT
 */
router.put('/:id', logController.update);

/*
 * DELETE
 */
router.delete('/:id', logController.remove);

module.exports = router;
