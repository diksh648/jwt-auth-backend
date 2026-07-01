const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'A simple API'
        },
        servers: [
            {
                url: 'http://localhost:5000',
            },
        ],
    },
    apis: ['./server/app.js'], // Path to the API docs
};
const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;