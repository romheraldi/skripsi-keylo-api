let EmployeeModel = require('./employeeModel.js');

/**
 * employeeController.js
 *
 * @description :: Server-side logic for managing employees.
 */
module.exports = {

    /**
     * employeeController.list()
     */
    list: function (req, res) {
        EmployeeModel.find(function (err, employees) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting employee.',
                    error: err
                });
            }

            return res.json(employees);
        });
    },

    /**
     * employeeController.show()
     */
    show: function (req, res) {
        let id = req.params.id;

        EmployeeModel.findOne({_id: id}, function (err, employee) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting employee.',
                    error: err
                });
            }

            if (!employee) {
                return res.status(404).json({
                    message: 'No such employee'
                });
            }

            return res.json(employee);
        });
    },

    /**
     * employeeController.create()
     */
    create: function (req, res) {
        let employee = new EmployeeModel({
			fullName : req.body.fullName,
			sureName : req.body.sureName,
			division : req.body.division,
			position : req.body.position
        });

        employee.save(function (err, employee) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating employee',
                    error: err
                });
            }

            return res.status(201).json(employee);
        });
    },

    /**
     * employeeController.update()
     */
    update: function (req, res) {
        let id = req.params.id;

        EmployeeModel.findOne({_id: id}, function (err, employee) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting employee',
                    error: err
                });
            }

            if (!employee) {
                return res.status(404).json({
                    message: 'No such employee'
                });
            }

            employee.fullName = req.body.fullName ? req.body.fullName : employee.fullName;
			employee.sureName = req.body.sureName ? req.body.sureName : employee.sureName;
			employee.division = req.body.division ? req.body.division : employee.division;
			employee.position = req.body.position ? req.body.position : employee.position;
            employee.deletedAt = req.body.deletedAt ? req.body.deletedAt : employee.deletedAt;
			
            employee.save(function (err, employee) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating employee.',
                        error: err
                    });
                }

                return res.json(employee);
            });
        });
    },

    /**
     * employeeController.remove()
     */
    remove: function (req, res) {
        let id = req.params.id;

        EmployeeModel.findByIdAndRemove(id, function (err, employee) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the employee.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
