import { BrowserRouter } from 'react-router-dom';
import './style.css';
import { Router } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScrollToTop } from './components/ScrollTop/ScrollTop';

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
