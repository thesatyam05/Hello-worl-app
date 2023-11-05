import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import Input from '../components/Input';
import authState from '../hooks/auth';
import toast from 'react-hot-toast';
import api from '../../utils/api';

type Props = {};

const RegisterPage = (_props: Props) => {
	const [register, setRegister] = useState(false);

	const user = authState.user();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = Object.fromEntries(new FormData(event.currentTarget));
		const response = await api.register('post', 'api/auth/register', data);

		// show error message or redirect to login if successful

		if (response.state == 'fail') {
			toast.error(response.message);
		} else if (response.state == 'success') {
			toast.success(response.message);
			setRegister(true);
		}
	};

	if (register) {
		return <Navigate to='/login' />;
	}

	if (user) {
		return <Navigate to='/' />;
	}

	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Create Account
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<Input id='name' name='name' type='text' label='Name' />
					<Input id='email' name='email' type='text' label='Email' />
					<Input id='password' name='password' type='text' label='Password' />
					<div>
						<button
							type='submit'
							className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							Sign up
						</button>
					</div>
				</form>
				<p className='mt-10 text-center text-sm text-gray-500'>
					Already have an account?{' '}
					<a
						href='/login'
						className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
						Login
					</a>
				</p>
			</div>
		</div>
	);
};

export default RegisterPage;
