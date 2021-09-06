let PositionModel = require('./positionModel.js');

/**
 * positionController.js
 *
 * @description :: Server-side logic for managing positions.
 */
module.exports = {

    /**
     * positionController.list()
     */
    list: function (req, res) {
        PositionModel.find(function (err, positions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting position.',
                    error: err
                });
            }

            return res.json(positions);
        });
    },

    /**
     * positionController.show()
     */
    show: function (req, res) {
        let id = req.params.id;

        PositionModel.findOne({_id: id}, function (err, position) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting position.',
                    error: err
                });
            }

            if (!position) {
                return res.status(404).json({
                    message: 'No such position'
                });
            }

            return res.json(position);
        });
    },

    /**
     * positionController.create()
     */
    create: function (req, res) {
        let position = new PositionModel({
			name : req.body.name
        });

        position.save(function (err, position) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating position',
                    error: err
                });
            }

            return res.status(201).json(position);
        });
    },

    /**
     * positionController.update()
     */
    update: function (req, res) {
        let id = req.params.id;

        PositionModel.findOne({_id: id}, function (err, position) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting position',
                    error: err
                });
            }

            if (!position) {
                return res.status(404).json({
                    message: 'No such position'
                });
            }

            position.name = req.body.name ? req.body.name : position.name;
            position.deletedAt = req.body.deletedAt ? req.body.deletedAt : position.deletedAt;

            position.save(function (err, position) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating position.',
                        error: err
                    });
                }

                return res.json(position);
            });
        });
    },

    /**
     * positionController.remove()
     */
    remove: function (req, res) {
        let id = req.params.id;

        PositionModel.findByIdAndRemove(id, function (err, position) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the position.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
