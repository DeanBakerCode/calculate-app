import './styles.css';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/components';

export default function Root() {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
}
