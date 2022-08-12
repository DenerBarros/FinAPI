const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());
const customer = [];

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement - []
 */

app.post("/account", (request, response) => {
    const { cpf, name } = request.body;

    const custumerAlreadyExists = customer.some(
        (customer) => customer.cpf === cpf
    );

    if(custumerAlreadyExists){
        return response.status(400).json({error: "Cpf já cadastrado!"})
    }
   

    customer.push({
        cpf,
        name, 
        id: uuidv4(),
        statement: []
    });

    return response.status(201).send();

});


app.listen(3333);
