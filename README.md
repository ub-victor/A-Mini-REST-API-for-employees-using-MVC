# A Mini REST API for Employees (MVC)

[![Project Status](https://img.shields.io/badge/status-active-success)](https://github.com/ub-victor/A-Mini-REST-API-for-employees-using-MVC)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A small, well-structured RESTful API for managing employee data built with Node.js, Express, MongoDB and EJS (server-side rendered frontend). This repository demonstrates the Model–View–Controller (MVC) pattern for a CRUD-style employees service and includes a minimal web UI.

Key goals:
- Clear MVC separation (Models, Controllers, Routes, Views)
- JSON API for programmatic access + simple EJS frontend for human-friendly interaction
- Easy to run locally and easy to extend for learning or a small project

Table of Contents
- Features
- Tech stack
- Quick start
- Configuration
- Database
- Available scripts
- API Endpoints
- Frontend (EJS)
- Testing
- Project structure
- Contributing
- License
- Contact

Features
- CRUD for Employee resources (Create, Read, Update, Delete)
- RESTful JSON API under /api/employees
- Simple EJS-based frontend for listing and managing employees
- Input validation and consistent JSON error responses
- MongoDB persistence (local or Atlas)

Tech stack
- Node.js (LTS)
- Express
- MongoDB (mongoose)
- EJS for server-side views
- Nodemon for development (optional)
- (Optional) dotenv for environment configuration

Quick start (local)
Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- MongoDB (local installed and running) OR a MongoDB Atlas connection string

Clone and install
```bash
git clone https://github.com/ub-victor/A-Mini-REST-API-for-employees-using-MVC.git
cd A-Mini-REST-API-for-employees-using-MVC
npm install
```

Create environment config
Copy the example env or create `.env` in the project root:
```env
# .env (example)
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/employees_db
SESSION_SECRET=replace_with_a_strong_secret
```
If you prefer MongoDB Atlas use the provided connection string from Atlas for `MONGODB_URI`.

Run the app
```bash
# development with auto-reload (if nodemon is installed)
npm run dev

# production
npm start
```
By default the app will be available at http://localhost:3000

Database
- If using local MongoDB, ensure `mongod` is running.
- If using MongoDB Atlas, whitelist your IP or use 0.0.0.0/0 during development.
- If the repo includes a seed script, run:
  ```bash
  npm run seed
  ```
  (If there is no seed script present, create a simple seed file that inserts sample Employee documents using mongoose.)

Available npm scripts (recommended)
Add or confirm these scripts in package.json if not present:
```json
{
  "scripts": {
    "start": "NODE_ENV=production node src/app.js",
    "dev": "nodemon src/app.js",
    "lint": "eslint .",
    "test": "npm test",
    "seed": "node scripts/seed.js"
  }
}
```
Adjust paths to match your project entry file (e.g., `src/app.js` or `index.js`).

API Endpoints (examples)
All API endpoints return JSON (except the EJS frontend). Replace `:id` with employee MongoDB ObjectId.

- GET /api/employees
  - List all employees (supports pagination & filter query params if implemented)
- GET /api/employees/:id
  - Get details for a single employee
- POST /api/employees
  - Create a new employee
  - Example body:
    ```json
    {
      "firstName": "Jane",
      "lastName": "Doe",
      "email": "jane.doe@example.com",
      "position": "Software Engineer",
      "department": "Engineering"
    }
    ```
- PUT /api/employees/:id
  - Replace or update an employee (depending on implementation)
- PATCH /api/employees/:id
  - Partial update (if implemented)
- DELETE /api/employees/:id
  - Remove an employee

Example curl requests
```bash
# List employees
curl -s http://localhost:3000/api/employees

# Create an employee
curl -s -X POST http://localhost:3000/api/employees \
  -H "Content-Type: application/json" \ 
  -d '{"firstName":"John","lastName":"Smith","email":"john.smith@example.com","position":"HR Manager","department":"HR"}'

# Get a single employee
curl -s http://localhost:3000/api/employees/<employee-id>
```

Frontend (EJS)
- The repository includes simple server-rendered views using EJS.
- Typical routes for the UI:
  - GET /employees — list and links to create/edit
  - GET /employees/new — form to create employee
  - GET /employees/:id/edit — edit form
- Forms post to API endpoints or to server routes which in turn call controllers to persist data in MongoDB.

Testing
- Add unit & integration tests with your preferred framework (Jest, Mocha, Supertest).
- Example command:
  ```bash
  npm test
  ```

Project structure (suggested / common)
Adjust to match the actual repository layout:
```
.
├── src/
│   ├── controllers/     # controllers: handle requests & responses
│   ├── models/          # mongoose models (Employee)
│   ├── routes/          # express routers (api and ui)
│   ├── views/           # EJS templates
│   ├── services/        # business logic, data access helpers
│   └── app.js           # express app bootstrap & middleware
├── scripts/             # seed or migration helper scripts
├── tests/               # unit & integration tests
├── .env.example         # example environment variables
├── package.json
└── README.md
```

Best practices & suggestions
- Validate and sanitize incoming data (use Joi, express-validator, or mongoose validation).
- Handle errors consistently and return proper HTTP codes.
- Do not commit secrets. Use .env and .gitignore.
- Add request logging (morgan) and centralized error handling middleware.
- Add CORS configuration if you plan to call the API from a separate frontend.

Contributing
Contributions are welcome. Suggested workflow:
1. Fork the repository
2. Create a feature branch: git checkout -b feat/describe-change
3. Implement changes & tests
4. Run tests and linters
5. Open a PR describing the change

License
This project is available under the MIT License. See the LICENSE file for details.

Contact
Maintainer: ub-victor — https://github.com/ub-victor
