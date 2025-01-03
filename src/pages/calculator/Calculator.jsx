import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// gets the calculator data
import { getcalculator } from '../../calculationData/atlas';
// calculator Input component
import { NumericCalculator } from '../../components/components';
//styles
import './calculator.css';

export default function Calculator() {
    const navigate = useNavigate();
    // read the url parameters
    const { categoryPrm, calculatorPrm } = useParams();
    // state for the caculator data class
    const [calculatorData, setCalculatorData] = useState(null);
    // get the calculator data on load and save it to calculatorData
    const forceUpdate = useRef(0);
    //
    // On page load call the
    useEffect(() => {
        const calculatorData = getcalculator(categoryPrm, calculatorPrm);
        if (!calculatorData) {
            navigate('/' + categoryPrm);
        }
        setCalculatorData(() => calculatorData.data);
        forceUpdate.current++;
    }, [calculatorPrm]);

    if (!calculatorData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="calculator-page">
            <div className="calculator-container">
                <div className="calculator-title">
                    <div className="calculator-title-img">
                        <img src={calculatorData.img} alt="" />
                    </div>
                    <div className="calculator-title-text">
                        <h4 className="font-calculator-page-category">
                            {categoryPrm}
                        </h4>
                        <h2 className="font-calculator-page-title">
                            {calculatorData.title}
                        </h2>
                    </div>
                </div>
                <div className="calculator-description">
                    <p className="font-calculator-page-description">
                        {calculatorData.description}
                    </p>
                </div>
                <div className="calculator-UI">
                    {/* <h1 className="mobile-heading">{calculatorData.title}</h1> */}

                    {calculatorData.variables && (
                        <NumericCalculator
                            className="numericCalculator"
                            key={forceUpdate.current}
                            calculatorData={calculatorData}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
