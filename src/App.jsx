import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
import Questions from './pages/Questions';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './pages/QuestionSlice';

const queryClient = new QueryClient();

function App() {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route element={<AppLayout />}>
							<Route path="/" element={<Home />} />
							<Route path="/questions/:id" element={<Questions />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</Provider>
	);
}

export default App;
