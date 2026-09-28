# Q4 - Employee API with MongoDB and Mongoose

## Project
Employee API using Node.js, Express, MongoDB and Mongoose.

## Requirements implemented
- Local MongoDB database: `employeeDB`
- Collection: `employees`
- Server port: `5000`
- Mongoose connection
- Employee schema in `models/employee.js`
- GET `/employees`
- Returns all employees and a count
- Returns HTTP 500 on database error
- No employee data is hard-coded or seeded in the code

## Run

```bash
npm install
npm start
```

Expected terminal output:

```text
MongoDB connected
Server running on port 5000
```

## API

```text
GET http://localhost:5000/employees
```

## Manual MongoDB insertion
Use MongoDB Compass and manually insert at least 5 documents into:

`employeeDB` -> `employees`

Each document must use these fields:

- `employeeName`
- `designation`
- `email`
- `department`
- `salary`

## Testing
1. Start MongoDB.
2. Insert 5 employees in Compass.
3. Start the Node server.
4. Call GET `/employees` in Postman or Thunder Client.
5. Confirm `count` is 5.
6. Add a 6th employee in Compass.
7. Call GET `/employees` again without restarting the server.
8. Confirm `count` is 6.
9. Stop MongoDB and restart the server to capture the connection error.

## Suggested screenshot names
Save screenshots in `screenshots/`:
- `01-compass-5-documents.png`
- `02-server-running.png`
- `03-get-employees-count-5.png`
- `04-compass-6-documents.png`
- `05-get-employees-count-6.png`
- `06-mongodb-error.png`
