const { faker } = require('@faker-js/faker');
const express= require("express");

const app = express();
const port = 8000;

const createUser = () => ({
        name: faker.commerce.productName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
    });
    


const createCompany = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country(),
    }
});

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});


app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});


app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({newUser,newCompany});
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );