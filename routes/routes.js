const express = require("express");
const router = express.Router();

const indexRouter = require("./index");
router.use("/", indexRouter);
const divisionRouter = require('../modules/division/divisionRoutes');
router.use('/division', divisionRouter);
const positionRouter = require('../modules/position/positionRoutes');
router.use('/position', positionRouter);
const employeeRouter = require('../modules/employee/employeeRoutes');
router.use('/employee', employeeRouter);
const categoryRouter = require('../modules/category/categoryRoutes');
router.use('/category', categoryRouter);
const doorLockRouter = require('../modules/doorLock/doorLockRoutes');
router.use('/door-lock', doorLockRouter);
const logRouter = require('../modules/log/logRoutes');
router.use('/log', logRouter);

module.exports = router;