var LogModel = require('./logModel.js');

/**
 * logController.js
 *
 * @description :: Server-side logic for managing logs.
 */
module.exports = {

    /**
     * logController.list()
     */
    list: function (req, res) {
        LogModel.find(function (err, logs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting log.',
                    error: err
                });
            }

            return res.json(logs);
        });
    },

    /**
     * logController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        LogModel.findOne({_id: id}, function (err, log) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting log.',
                    error: err
                });
            }

            if (!log) {
                return res.status(404).json({
                    message: 'No such log'
                });
            }

            return res.json(log);
        });
    },

    /**
     * logController.create()
     */
    create: function (req, res) {
        var log = new LogModel({
			door : req.body.door,
			person : req.body.person
        });

        log.save(function (err, log) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating log',
                    error: err
                });
            }

            return res.status(201).json(log);
        });
    },

    /**
     * logController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        LogModel.findOne({_id: id}, function (err, log) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting log',
                    error: err
                });
            }

            if (!log) {
                return res.status(404).json({
                    message: 'No such log'
                });
            }

            log.door = req.body.door ? req.body.door : log.door;
			log.person = req.body.person ? req.body.person : log.person;
			
            log.save(function (err, log) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating log.',
                        error: err
                    });
                }

                return res.json(log);
            });
        });
    },

    /**
     * logController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        LogModel.findByIdAndRemove(id, function (err, log) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the log.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
