import React, { useState } from 'react';
import './calcface.css';

export default function NumericCalculator({ calculatorData }) {
    const [variables, setVariables] = useState(
        new Map(Object.entries(calculatorData.variables))
    );
    const [userValues, setUserValues] = useState([]);

    const handleChange = (e) => {
        console.log('handle change');
        const { id, value } = e.target;

        //* validate the input data
        validateInput(id, value);

        //* add the variable id to the userValues set
        const newUserValues = [...userValues];
        if (!newUserValues.includes(id)) {
            newUserValues.push(id);
            if (newUserValues.length > calculatorData.requiredVariableCount) {
                newUserValues.shift();
            }
        }
        setUserValues(newUserValues);

        //* update values to the variables Map, decided to keep using Map
        const newVariablesMap = new Map(variables); // create a new Map
        const variableId = newVariablesMap.get(id); // .get the item to be updated
        const updatedVariable = { ...variableId, value: value };
        newVariablesMap.set(id, updatedVariable);

        //* solve if you have enough values
        if (newUserValues.length === calculatorData.requiredVariableCount) {
            for (const [variableKey, variableObj] of newVariablesMap) {
                if (!newUserValues.includes(variableKey)) {
                    // solve the value by using the Solve method in each unknown variable id property
                    variableObj.solve(newVariablesMap);
                }
            }
        }
        setVariables(newVariablesMap);
    };

    const validateInput = (id, value) => {
        if (!variables.has(id)) {
            throw new Error(
                'Invalid input: variables key does not exist, needs to be either ',
                variables.keys()
            );
        }
    };

    const updateUserValues = (id) => {
        // console.log('adding to user values:', id);
        // if (newUserValues.length === calculatorData.requiredVariableCount) {
        //     console.log('you have enough user values to solve');
        //     handleSolve();
        // }
    };

    const updateVariables = (id, value) => {
        // create a new object with the user value
        // .set the updated object to the Map

        setVariables((prevVariables) => {
            return newVariablesMap;
        });
    };

    const handleReset = () => {
        //
        const newVariablesMap = new Map(variables); // create a new Map
        newVariablesMap.forEach((variable) => {
            variable.value = '';
        });
        setVariables(newVariablesMap);
        setUserValues([]);
    };

    return (
        <div className="values-set">
            {[...variables].map((variableArr, index) => {
                const id = variableArr[0];
                const item = variableArr[1];
                return (
                    <div
                        className={
                            item.readOnly ? 'read-only set-item' : 'set-item'
                        }
                        key={index}
                    >
                        <label>
                            {item.name}
                            {':'}
                            <input
                                id={id}
                                type="text"
                                readOnly={item.readOnly}
                                value={item.value}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                );
            })}
            <div>
                <button className="values-clear" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    );
}
