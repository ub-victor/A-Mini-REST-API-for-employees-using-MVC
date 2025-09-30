const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController');

// /employees
router.route('/')
    .get(employeesController.getAllEmployees)   // GET all
    .post(employeesController.createEmployee)   // POST (create)
    .put(employeesController.updateEmployee)    // PUT (update)
    .delete(employeesController.deleteEmployee) // DELETE

// /employees/:id
router.route('/:id')
    .get(employeesController.getEmployee);      // GET single by ID

module.exports = router;
