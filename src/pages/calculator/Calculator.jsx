import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
// gets the calculator data
import { getcalculator } from '../../calculationData/atlas';
// calculator Input component
import NumericCalculator from '../../components/calcFace/NumericCalculator';
//styles
import './calculator.css';

export default function Calculator() {
    // read the url parameters
    const { categoryPrm, calculatorPrm } = useParams();
    // state for the caculator data class
    const [calculatorData, setCalculatorData] = useState(null);
    // get the calculator data on load and save it to calculatorData
    const forceUpdate = useRef(0);
    //
    // On page load call the
    useEffect(() => {
        getCalculatorData();
        forceUpdate.current++;
    }, [calculatorPrm]);

    const getCalculatorData = () => {
        setCalculatorData(() => {
            return getcalculator(categoryPrm, calculatorPrm).data;
        });
    };

    if (!calculatorData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="calculator">
            <div className="calculator-container">
                <div className="calculator-details">
                    <h1>{calculatorData.title}</h1>
                    <p>{calculatorData.description}</p>
                </div>
                {calculatorData.variables && (
                    <NumericCalculator
                        key={forceUpdate.current}
                        calculatorData={calculatorData}
                    />
                )}
            </div>
        </div>
    );
}
