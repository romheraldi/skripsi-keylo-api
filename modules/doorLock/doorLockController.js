var DoorlockModel = require('./doorLockModel.js');
let Employee = require('../employee/employeeModel');

/**
 * doorLockController.js
 *
 * @description :: Server-side logic for managing doorLocks.
 */
module.exports = {

    /**
     * doorLockController.list()
     */
    list: function (req, res) {
        DoorlockModel.find().populate({path: 'authenticator', model: Employee}).populate('category').exec(function (err, doorLocks) {
            console.log(err);
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doorLock.',
                    error: err
                });
            }

            return res.json(doorLocks);
        });
    },

    /**
     * doorLockController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        DoorlockModel.findOne({_id: id}, ).populate({path: 'authenticator', model: Employee}).populate('category').exec(function (err, doorLock) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doorLock.',
                    error: err
                });
            }

            if (!doorLock) {
                return res.status(404).json({
                    message: 'No such doorLock'
                });
            }

            return res.json(doorLock);
        });
    },

    /**
     * doorLockController.create()
     */
    create: function (req, res) {
        var doorLock = new DoorlockModel({
			uniqueId : req.body.uniqueId,
			name : req.body.name,
			category : req.body.category,
			authenticator : req.body.authenticator
        });

        doorLock.save(function (err, doorLock) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating doorLock',
                    error: err
                });
            }

            return res.status(201).json(doorLock);
        });
    },

    /**
     * doorLockController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        DoorlockModel.findOne({_id: id}, function (err, doorLock) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doorLock',
                    error: err
                });
            }

            if (!doorLock) {
                return res.status(404).json({
                    message: 'No such doorLock'
                });
            }

            doorLock.uniqueId = req.body.uniqueId ? req.body.uniqueId : doorLock.uniqueId;
            doorLock.category = req.body.category ? req.body.category : doorLock.category;
			doorLock.name = req.body.name ? req.body.name : doorLock.name;
			doorLock.authenticator = req.body.authenticator ? req.body.authenticator : doorLock.authenticator;
			doorLock.deletedAt = req.body.deletedAt || req.body.deletedAt === "" ? req.body.deletedAt : doorLock.deletedAt;

            doorLock.save(function (err, doorLock) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating doorLock.',
                        error: err
                    });
                }

                return res.json(doorLock);
            });
        });
    },

    /**
     * doorLockController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        DoorlockModel.findByIdAndRemove(id, function (err, doorLock) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the doorLock.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
