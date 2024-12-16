import { NavLink } from 'react-router-dom';
import atlas from '../../calculationData/atlas';
import './navbar.css';
import Logo from '../../assets/calculateLogo.png';
import { PiCaretDownBold } from 'react-icons/pi';

// const categories = [...atlas.values]

export default function NavBar() {
    return (
        <header className="navBar">
            <div className="navBar-logo">
                <NavLink to="/">
                    <img src={Logo} />
                </NavLink>
            </div>
            <nav className="navBar-nav">
                <ul className="nav-categories">
                    {atlas &&
                        atlas.map((category, index) => {
                            return (
                                <li key={index} className="nav-item">
                                    <NavLink
                                        to={category.to}
                                        className={({ isActive }) =>
                                            isActive ? 'isActiveLink' : ''
                                        }
                                    >
                                        {category.categoryName}
                                        <PiCaretDownBold className="nav-item-icon" />
                                    </NavLink>

                                    <ul className="nav-calculators">
                                        {category.calculators.map(
                                            (calculator, index) => {
                                                {
                                                    // console.log(calculator);
                                                }
                                                return (
                                                    <li
                                                        key={index}
                                                        className={
                                                            !calculator.calculatorName
                                                                ? 'nav-item disabled-link'
                                                                : 'nav-item'
                                                        }
                                                    >
                                                        <NavLink
                                                            to={calculator.to}
                                                            className={({
                                                                isActive,
                                                            }) =>
                                                                isActive
                                                                    ? 'isActiveLink'
                                                                    : ''
                                                            }
                                                        >
                                                            {calculator.calculatorName
                                                                ? calculator.calculatorName
                                                                : calculator.data}
                                                        </NavLink>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </li>
                            );
                        })}
                </ul>
            </nav>
        </header>
    );
}
