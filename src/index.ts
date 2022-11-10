import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes';
dotenv.config()

const server = express();
server.use(cors());
server.use(express.json());

server.use(router)

export default server;