import { BrowserRouter } from 'react-router-dom';
import './style.css';
import { Router } from './router';

function App() {
	return (
		<>
			<BrowserRouter basename={import.meta.env.PUBLIC_URL}>
				<Router />
			</BrowserRouter>
		</>
	);
}

export default App;
