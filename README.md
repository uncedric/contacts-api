# Contacts API Documentation

## Approach
- use nest to autogenerate code
- use copilot for enhanced autocomplete 
- use chatgpt to generate postman collection based on controller code

## Bonus features
- include swagger / OpenAPI
- include linting for automatic code formatting
- include class validator, we could add decorators to the DTOs to automatically validate objects
- 


### Technology Stack
- **NestJS**: A framework for building api, include swagger and class validation
- **Docker**: To containerize the application for easier testing in case already installed

### Steps Taken

1. **Generate New NestJS Project**:
   - A new NestJS project was generated to serve as the foundation of the API.

2. **Generate Contacts Resource**:
   - Used NestJS CLI to generate a new resource (contacts), which includes the following:
     - **Module**: Handles dependencies and structure for the contacts functionality.
     - **Controller**: Manages HTTP requests and routes.
     - **Service**: Contains the business logic for creating, updating, deleting, and fetching contacts.
     - **DTOs** (Data Transfer Objects): Defines the structure of data sent and received through HTTP requests.

   ```bash
   nest generate resource contacts
   ```

## Running the Application in Development Mode
For local development, you can run the application in "watch mode" using:

```bash
npm run start:dev
```



## Running the Application with Docker
If you'd like to run the application using Docker, you can use the following command:

```bash
docker-compose up
```
This will start the application within a container, ensuring a consistent environment across different machines.

## Example request object
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890"
}
```