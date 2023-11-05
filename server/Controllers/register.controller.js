const User = require('../models/userModel');
const PasswordService = require('../services/PasswordService');

const register = async (req, res, next) => {
	const { name, email, password } = req.body;

	const isAlreadyUser = await User.findOne({ email: email });

	if (isAlreadyUser) {
		return res.status(400).json({ state: 'fail', message: 'User already exists' });
	}

	const user = new User({
		name: name,
		email: email,
		password: await PasswordService.hashPassword(password),
	});

	await user.save();

	res.status(201).json({ state: 'success', message: 'Registered successfully' });
};

module.exports = {
	register,
};
