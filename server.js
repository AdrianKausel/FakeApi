const express = require('express');
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User{
    constructor(){
        this.userId = faker.datatype.uuid(),
        this.name = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.avatar = faker.image.avatar(),
        this.password = faker.internet.password(),
        this.birthdate = faker.date.birthdate(),
        this.registeredAt = faker.date.past()
    }
}

class Company{
    constructor(){
        this.companyName = faker.company.companyName(),
        this.direction = {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker. address.country()
    }
}}

app.post("/api/user/new", (req, res) => {
    const newUser = new User()
    console.log(`New user created: ${newUser}!`)
    res.json( {msg: "User created!", user: newUser} );
});

app.post("/api/company/new", (req, res) => {
    const newCompany = new Company()
    console.log(`New company created: ${newCompany}!`)
    res.json( {msg: "Company created!", company: newCompany} );
});

app.post("/api/user/company", (req, res) => {
    const newUser = new User()
    const newCompany = new Company()
    console.log(`New company and user created: ${newUser} who works at ${newCompany}!`)
    res.json( {msg: "Company and user created!", company: newCompany, user: newUser} );
});




app.listen(port, () => console.log("Arriba el SV"))