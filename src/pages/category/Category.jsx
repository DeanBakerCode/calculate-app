import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PiCalculatorLight } from 'react-icons/pi';
import { getCategory } from '../../calculationData/atlas';
import './category.css';

export default function Category() {
    const navigate = useNavigate();
    const { categoryPrm } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const categoryData = getCategory(categoryPrm);
        if (!categoryData) {
            navigate('/');
        }
        setCategory(() => categoryData);
    }, [categoryPrm]);

    if (!category) {
        return <p>Loading...</p>;
    }

    return (
        <div className="category">
            <h2 className="font-category-page-title">
                {category.categoryName}
            </h2>
            <p></p>
            <div className="category-calculators">
                <ul>
                    {category.calculators.map((calcItem, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    to={calcItem.to}
                                    className="calc-item"
                                    key={index}
                                >
                                    <div className="calc-item-img">
                                        <img src={calcItem.imagePath} alt="" />
                                        <PiCalculatorLight className="calc-item-icon" />
                                    </div>
                                    <div className="calc-item-details">
                                        <h3 className="font-category-page-calculator-title">
                                            {calcItem.calculatorName}
                                        </h3>
                                        <p>{calcItem.description}</p>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
