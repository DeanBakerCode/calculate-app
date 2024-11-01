import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { Root, Home, Category, Calculator, About } from './pages/pages';

const appRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Root />}>
			<Route path='/' element={<Home />} />
			<Route path=':category' element={<Category />} />
			<Route path=':category/:calculator' element={<Calculator />} />
			<Route path='about' element={<About />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={appRouter} />;
}

export default App;
