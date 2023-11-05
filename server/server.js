require('dotenv').config();

const PORT = process.env.PORT || 8000;

const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const loginRoute = require('./Routes/login.route');
const regiterRoute = require('./Routes/register.route');

app.use(cookieParser());
app.use(express.json());
app.use(cors());

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to DB'))
	.catch((err) => console.log('🔴', err));

app.use('/api/auth/login', loginRoute);
app.use('/api/auth/register', regiterRoute);

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
