import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: 'Books REST API',
            description:
                'A REST API built with Express and MySQL',
        },
    },
    apis: ['src/routes/book.routes.js'],
};
const swaggerSpec = swaggerJsDoc(swaggerOptions);

export const swaggerDocs = (app) => {
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('Version 1 Docs are available at /api/docs');
};