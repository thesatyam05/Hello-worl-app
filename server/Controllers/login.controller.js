const User = require('../models/userModel');
const PasswordService = require('../services/PasswordService');

const login = async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		return res.status(400).json({ state: 'fail', message: 'User not found' });
	}

	const checkPassword = await PasswordService.checkPassword(req.body.password, user.password);

	if (!checkPassword) {
		return res.status(400).json({ state: 'fail', message: 'Incorrect email or password' });
	}

	res.status(200).json({
		state: 'success',
		message: 'Logged in successfully',
		user: {
			id: user.id,
			name: user.name,
			email: user.email,
		},
	});
};

module.exports = {
	login,
};
