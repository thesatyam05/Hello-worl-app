import authState from '../hooks/auth';

type Props = {};

const HomePage = (_props: Props) => {
	const { logout } = authState;
	const user = authState.user();

	return (
		<div className=' h-screen w-full flex flex-col gap-20 justify-center items-center'>
			<div className='text-center'>
				<h1 className=' text-5xl font-bold'>Hello {user.name} 👋</h1>
			</div>
			<span className=' text-gray-600'>you're signed in as {user.email}</span>
			<button
				className='px-2 py-1 bg-red-600 rounded-md text-white text-center'
				onClick={logout}>
				Logout
			</button>
		</div>
	);
};

export default HomePage;
