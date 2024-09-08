import { BrowserRouter } from 'react-router-dom';
import './style.css';
import { Router } from './router';
import { ScrollToTop } from './components/ScrollTop/ScrollTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter basename={import.meta.env.PUBLIC_URL}>
					<ScrollToTop>
						<Router />
					</ScrollToTop>
				</BrowserRouter>
			</QueryClientProvider>
		</>
	);
}

export default App;
