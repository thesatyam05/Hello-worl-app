import { IUserData } from '../../types/userData';

const user = () => {
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;
};

const login = (user: IUserData) => {
	localStorage.setItem('user', JSON.stringify(user));
	window.location.reload();
};

const logout = () => {
	localStorage.removeItem('user');
	window.location.reload();
};

export default { user, login, logout };
