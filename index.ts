import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

const POST =process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
