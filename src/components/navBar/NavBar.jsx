import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function NavBar({ NavMenu }) {
	return (
		<header className='navBar'>
			<div className='navBar-logo'>
				<NavLink to='/'>
					<img src='calculateLogo.png' />
				</NavLink>
			</div>
			<nav className='navBar-nav'>
				<ul className='nav-categories'>
					{NavMenu &&
						NavMenu.map((category, index) => {
							return (
								<li key={index} className='nav-item'>
									<NavLink to={category.to} className={({ isActive }) => isActive && 'isActiveLink'}>
										{category.CategoryName}
									</NavLink>

									<ul className='nav-calculators'>
										{category.calculators.map((calculator, index) => {
											return (
												<li key={index} className='nav-item'>
													<NavLink to={calculator.to} className={({ isActive }) => isActive && 'isActiveLink'}>
														{calculator.CalculatorName}
													</NavLink>
												</li>
											);
										})}
									</ul>
								</li>
							);
						})}
				</ul>
			</nav>
		</header>
	);
}
