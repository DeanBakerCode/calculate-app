import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

import {
    Root,
    Home,
    Category,
    Calculator,
    About,
    NotFound,
} from './pages/pages';

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
            <Route path="/cat/:categoryPrm" element={<Category />} />
            <Route
                path="cat/:categoryPrm/calc/:calculatorPrm"
                element={<Calculator />}
            />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={appRouter} />;
}
export default App;
