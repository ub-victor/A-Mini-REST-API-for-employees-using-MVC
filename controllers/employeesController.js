const data = {
    employees: require('../data/employees.json'),
    setEmployees: function (data) { this.employees = data }
};

// GET all employees
const getAllEmployees = (req, res) => {
    res.json(data.employees);
};

// CREATE new employee
const createEmployee = (req, res) => {
    const newEmployee = {
        id: data.employees.length + 1,   // Auto ID
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };

    // Update in-memory data
    data.setEmployees([...data.employees, newEmployee]);

    res.status(201).json(newEmployee);
};

// UPDATE employee
const updateEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    if (!employee) return res.status(404).json({ "message": "Employee not found" });

    if (req.body.firstname) employee.firstname = req.body.firstname;
    if (req.body.lastname) employee.lastname = req.body.lastname;

    res.json(employee);
};

// DELETE employee
const deleteEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    if (!employee) return res.status(404).json({ "message": "Employee not found" });

    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    data.setEmployees(filteredArray);

    res.json({ "message": "Employee deleted", employee });
};

// GET single employee by ID
const getEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) return res.status(404).json({ "message": "Employee not found" });
    res.json(employee);
};

module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
};


