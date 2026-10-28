# Product Management API

## Student Information
- **Name:** Pallab Aich
- **Student ID:** 23-54807-3
- **Section:** D
- **Project:** Lab Task 1 — Product Management API

## Project Description
This project is a REST API developed using NestJS, TypeScript, PostgreSQL, and TypeORM. It supports CRUD operations for Products and Employees.

## Technologies Used
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Node.js
- pnpm

## Database Setup
1. Install and start PostgreSQL.
2. Create a database named `user_managemant`.
3. Configure the database connection in the `.env` file.
4. Make sure the database credentials and port match your local PostgreSQL configuration.

**Note:** Never upload your actual `.env` file or database password to GitHub. Use `.env.example` to show the required environment variables without real credentials.

## Installation

Install the project dependencies:

```bash
pnpm install
```

## Build and Run

Build the project:

```bash
pnpm.cmd exec nest build --webpack false
```

Start the application:

```bash
node dist/main.js
```

Make sure PostgreSQL is running before starting the application.

## API Endpoints

### Product API

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products` | Create a product |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a product by ID |
| PATCH | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

### Employee API

| Method | Endpoint | Description |
|---|---|---|
| POST | `/employees` | Create an employee |
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get an employee by ID |
| PATCH | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

## Screenshots

The `screenshots` folder contains screenshots demonstrating the Product API CRUD operations:

1. `01-create.png` — Create a product
2. `02-get-all.png` — Get all products
3. `03-get-by-id.png` — Get a product by ID
4. `04-update.png` — Update a product
5. `05-confirm-update.png` — Confirm the updated product
6. `06-delete.png` — Delete a product
7. `07-confirm-delete.png` — Confirm the deleted product is absent

## Project Structure

```text
product-management-api/
├── src/
├── screenshots/
├── README.md
├── package.json
├── pnpm-lock.yaml
├── .gitignore
└── .env.example
```

## Important Notes
- PostgreSQL must be running before starting the application.
- Do not upload `node_modules`, `dist`, or the actual `.env` file.
- Verify that all CRUD endpoints work correctly before submission.