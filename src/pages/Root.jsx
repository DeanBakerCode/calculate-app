import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/components';
import NavMenu from '../assets/NavMenu';
import './styles.css';

export default function Root() {
	return (
		<>
			<NavBar NavMenu={NavMenu} />
			<Outlet />
		</>
	);
}
