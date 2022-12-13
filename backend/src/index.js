import express from "express";
import cors from "cors";

import {database} from "./models/database.js";
import {swaggerDocs} from "./config/swagger.config.js";
import {bookRoutes} from "./routes/book.routes.js";
import {appConfig} from "./config/app.config.js";

const app = express();
app.use(cors());
app.use(express.json());

database.sequelize.sync()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the config:', err);
    });

bookRoutes(app);
swaggerDocs(app);

app.listen(appConfig.PORT, () => {
    console.log(`Server is running on port ${appConfig.PORT}.`);
});