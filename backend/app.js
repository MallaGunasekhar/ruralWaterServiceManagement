import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./src/routes/routes.js";
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", routes);
app.listen(process.env.PORT, () => {

    console.log(
        `Server running on port ${process.env.PORT}`
    );

});