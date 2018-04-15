import express from 'express';
import users from './users.js';

const app = express();
const router = express.Router();

app.use('/users', users);


export default router;