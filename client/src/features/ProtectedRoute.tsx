import { Navigate } from 'react-router-dom';

import authState from '../hooks/auth';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const user = authState.user();

	if (!user) {
		return <Navigate to='/login' replace={true}></Navigate>;
	}

	return children;
}
