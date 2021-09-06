let express = require('express');
let router = express.Router();
let positionController = require('./positionController.js');

/*
 * GET
 */
router.get('/', positionController.list);

/*
 * GET
 */
router.get('/:id', positionController.show);

/*
 * POST
 */
router.post('/', positionController.create);

/*
 * PUT
 */
router.put('/:id', positionController.update);

/*
 * DELETE
 */
router.delete('/:id', positionController.remove);

module.exports = router;
