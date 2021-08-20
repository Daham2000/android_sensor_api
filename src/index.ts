import express from "express";
import cors from "cors";
import apiRouter from "./routes/api_router/api_router";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/",apiRouter);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.listen(PORT,()=>{
    console.log(`Android sensor listener server listening on port ${PORT}`);
});