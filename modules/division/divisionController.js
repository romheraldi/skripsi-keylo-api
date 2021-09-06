let DivisionModel = require('./divisionModel.js');

/**
 * divisionController.js
 *
 * @description :: Server-side logic for managing divisions.
 */
module.exports = {

    /**
     * divisionController.list()
     */
    list: function (req, res) {
        DivisionModel.find(function (err, divisions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting division.',
                    error: err
                });
            }

            return res.json(divisions);
        });
    },

    /**
     * divisionController.show()
     */
    show: function (req, res) {
        let id = req.params.id;

        DivisionModel.findOne({_id: id}, function (err, division) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting division.',
                    error: err
                });
            }

            if (!division) {
                return res.status(404).json({
                    message: 'No such division'
                });
            }

            return res.json(division);
        });
    },

    /**
     * divisionController.create()
     */
    create: function (req, res) {
        console.log(req.body);
        let division = new DivisionModel({
			name : req.body.name
        });

        division.save(function (err, division) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating division',
                    error: err
                });
            }

            return res.status(201).json(division);
        });
    },

    /**
     * divisionController.update()
     */
    update: function (req, res) {
        let id = req.params.id;

        DivisionModel.findOne({_id: id}, function (err, division) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting division',
                    error: err
                });
            }

            if (!division) {
                return res.status(404).json({
                    message: 'No such division'
                });
            }

            division.name = req.body.name ? req.body.name : division.name;
            division.deletedAt = req.body.deletedAt ? req.body.deletedAt : division.deletedAt;

            division.save(function (err, division) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating division.',
                        error: err
                    });
                }

                return res.json(division);
            });
        });
    },

    /**
     * divisionController.remove()
     */
    remove: function (req, res) {
        let id = req.params.id;

        DivisionModel.findByIdAndRemove(id, function (err, division) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the division.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
