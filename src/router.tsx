import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Main/page';
import { Layout } from './components/Layouts/Layout';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Mainpage />} />
			</Route>
		</Routes>
	);
}
