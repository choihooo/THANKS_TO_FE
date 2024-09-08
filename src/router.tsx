import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Main/page';
import Projectpage from './pages/Project/page';
import { Layout } from './components/Layouts/Layout';
import { ProjectAllPage } from './pages/ProjectAll/page';
import { ProjectDetailPage } from './pages/ProjectDetail/page';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Mainpage />} />
				<Route path="/project" element={<Projectpage />} />
				<Route path="/project/all" element={<ProjectAllPage />} />
				<Route path="/project/:id" element={<ProjectDetailPage />} />
			</Route>
		</Routes>
	);
}
