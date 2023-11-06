import { IUserData } from '../types/userData';

const backend_base_url =
	import.meta.env.MODE === 'development'
		? 'http://localhost:8000/'
		: 'https://hworld-server.vercel.app/';

const register = async (method: string, endPoint: string, data: any) => {
	try {
		const resp = await fetch(`${backend_base_url}${endPoint}`, {
			method: method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		const json = await resp.json();

		return json;
	} catch (error: any) {
		alert('Somehow something went wrong');
	}
};

const login = async (method: string, endPoint: string, data: IUserData) => {
	try {
		const resp = await fetch(`http://localhost:8000/${endPoint}`, {
			method: method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		const json = await resp.json();

		return json;
	} catch (error: any) {
		alert('Somehow something went wrong');
	}
};

export default { login, register };
