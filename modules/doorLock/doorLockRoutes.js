var express = require('express');
var router = express.Router();
var doorLockController = require('./doorLockController.js');

/*
 * GET
 */
router.get('/', doorLockController.list);

/*
 * GET
 */
router.get('/:id', doorLockController.show);

/*
 * POST
 */
router.post('/', doorLockController.create);

/*
 * PUT
 */
router.put('/:id', doorLockController.update);

/*
 * DELETE
 */
router.delete('/:id', doorLockController.remove);

module.exports = router;
