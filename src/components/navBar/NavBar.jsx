import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PiCaretDownBold, PiListBold, PiX } from 'react-icons/pi';

import atlas from '../../calculationData/atlas'; // navigation file
import './navbar.css';

import Logo from '../../assets/logo.svg'; // logo image

export default function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [menuCategory, setMenuCategory] = useState(null);

    return (
        <header className="navBar">
            <div className="navBar-logo" onClick={() => setToggleMenu(false)}>
                <NavLink to="/">
                    <img src={Logo} />
                </NavLink>
            </div>
            <div
                className=" navBar-mobile-button"
                onClick={() => {
                    setToggleMenu(!toggleMenu);
                }}
            >
                {toggleMenu ? <PiX /> : <PiListBold />}
            </div>
            <div className={`navBar-menu ${toggleMenu && 'mobile-menu'}`}>
                <nav className="navBar-nav">
                    <ul className="category-list">
                        {atlas &&
                            atlas.map((category, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={
                                            menuCategory === index
                                                ? 'category-list-open category-list-item nav-hover'
                                                : 'category-list-item nav-hover'
                                        }
                                        onClick={() => {
                                            console.log('click');

                                            setMenuCategory(() => {
                                                if (menuCategory === index) {
                                                    return null;
                                                } else return index;
                                            });
                                        }}
                                    >
                                        <NavLink
                                            to={category.to}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'category-list-item-active'
                                                    : ''
                                            }
                                        >
                                            {category.categoryName}
                                            <PiCaretDownBold className="category-list-item-icon" />
                                        </NavLink>

                                        <ul className="calculator-list">
                                            {category.calculators.map(
                                                (calculator, index) => {
                                                    return (
                                                        <li
                                                            key={index}
                                                            className="calculator-list-item nav-hover"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setToggleMenu(
                                                                    !toggleMenu
                                                                );
                                                            }}
                                                        >
                                                            <NavLink
                                                                to={
                                                                    calculator.to
                                                                }
                                                                className={({
                                                                    isActive,
                                                                }) =>
                                                                    isActive
                                                                        ? 'calculator-list-item-active font-nav-calculator'
                                                                        : 'nav-calculator-font'
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
            </div>
        </header>
    );
}
