import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { Root, Home, Category, Calculator, About } from './pages/pages';

const appRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Root />}>
			<Route path='/' element={<Home />} />
			<Route path=':categoryPrm' element={<Category />} />
			<Route path=':categoryPrm/:calculatorPrm' element={<Calculator />} />
			<Route path='about' element={<About />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={appRouter} />;
}

export default App;
