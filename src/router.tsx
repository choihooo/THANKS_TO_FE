import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Main/page';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Mainpage />} />
		</Routes>
	);
}
