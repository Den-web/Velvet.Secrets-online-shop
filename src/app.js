import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import contactsRouter from './routes/api/contacts.js';
import authRouter from './routes/api/auth.js';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/contacts', contactsRouter);
app.use('/users', authRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

export default app;
