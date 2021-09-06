let EmployeeModel = require('./employeeModel.js');
let bcrypt = require('bcrypt');

/**
 * authController.js
 *
 * @description :: Server-side logic for managing auth.
 */
module.exports = {

    /**
     * authController.login()
     */
    login: function (req, res) {
        EmployeeModel.findOne({email: req.body.email}, function (err, employee) {
            if (err) {
                return res.status(500).json({
                    message: 'Error login.',
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
};
