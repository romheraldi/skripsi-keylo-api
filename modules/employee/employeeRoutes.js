let express = require('express');
let router = express.Router();
let employeeController = require('./employeeController.js');

/*
 * GET
 */
router.get('/', employeeController.list);

/*
 * GET
 */
router.get('/:id', employeeController.show);

/*
 * POST
 */
router.post('/', employeeController.create);

/*
 * PUT
 */
router.put('/:id', employeeController.update);

/*
 * DELETE
 */
router.delete('/:id', employeeController.remove);

module.exports = router;
