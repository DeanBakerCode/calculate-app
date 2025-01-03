import React, { useState } from 'react';
import './numericCalculator.css';

export default function NumericCalculator({ calculatorData }) {
    const variablesData = new Map(Object.entries(calculatorData.variables));
    const requiredVariableCount = calculatorData.requiredVariableCount;
    // STATES
    const [variables, setVariables] = useState(variablesData);
    const [userValueIds, setUserValueIds] = useState(new Set());

    //* HANDLE CHANGE - When a input changes
    const handleChange = (e) => {
        //
        const { id, value } = e.target;
        const validValue = validateInput(id, value);
        //
        //***  UPDATE VARIABLE IDS TO THE USER VALUES
        const newUserValueIds = handleNewUserValueIds(
            userValueIds,
            validValue,
            id
        );
        //
        //***  UPDATE THE VARIABLES MAP WITH THE NEW VALUE
        const newVariables = handleNewVariables(validValue, id);

        // ***  HANDLE THE EVELUATE METHOD
        //TODO solve if you have enough values
        if (newUserValueIds.size === calculatorData.requiredVariableCount) {
            let changed = true;
            const known = new Set(newUserValueIds);
            while (changed) {
                changed = false;
                // loop through copy of all the Variables
                for (const [key, variable] of newVariables) {
                    // check foe each of the variables are not in the know variables
                    // if it is not known
                    if (!known.has(variable.id)) {
                        // get the dependencies for the (not know) variable so we can try to solve it
                        const args = variable.dependencies.map((dep) => {
                            // get the variable of each dependecy
                            const depVariable = newVariables.get(dep);
                            // if the variable is not null, is in the Known variables and it isn't empty, return the value
                            if (depVariable) {
                                if (
                                    known.has(dep) &&
                                    depVariable.value !== ''
                                ) {
                                    // return the dependiency variable value as a number
                                    return parseFloat(depVariable.value);
                                }
                            }
                        });
                        const validArgs = args.filter(
                            (arg) => arg !== undefined
                        );
                        if (validArgs.length >= requiredVariableCount) {
                            // pass in the variable values to the sove method, making sure the args are in the right order on the main object
                            variable.solve(...args);
                            known.add(variable.id);
                            console.log(
                                `SOLVED ${variable.id} as ${variable.value}`
                            );
                            console.log(`known is now:`, known, '\n');
                            changed = true;
                        }
                    }
                }
            }
            setVariables(newVariables);
        }
    };
    //* HANDLE ADDING THE VALUE ID
    const handleNewUserValueIds = (
        CurrentUserValueIds,
        NewValidValue,
        NewId
    ) => {
        let newUserValueIds = new Set(CurrentUserValueIds); // create a new Set
        newUserValueIds.add(NewId); // add the value to the set, if it already exists it wont add
        if (newUserValueIds.has(NewId) && NewValidValue === '') {
            // if the value is empty remove the Id
            newUserValueIds.delete(NewId);
            console.log('if value is empty', newUserValueIds);
        }
        // if the set has more than what is needed it deletes the oldest one
        if (newUserValueIds.size > calculatorData.requiredVariableCount) {
            const reSizedArray = Array.from(newUserValueIds);
            reSizedArray.shift();
            newUserValueIds = new Set(reSizedArray);
        }
        setUserValueIds(newUserValueIds);

        if (newUserValueIds.size < CurrentUserValueIds.size) {
            handleValuesReset(newUserValueIds);
        }

        return newUserValueIds;
    };
    //* HANDLE THE EDIT OF VARIABLE VALUE
    const handleNewVariables = (validValue, id) => {
        const newVariablesMap = new Map(variables); // create a new Map
        const variableId = newVariablesMap.get(id); // .get the item to be updated
        const updatedVariable = { ...variableId, value: validValue };
        newVariablesMap.set(id, updatedVariable);
        setVariables(newVariablesMap);
        return newVariablesMap;
    };
    //* VALIDATE THE INPUTED VALUES
    const validateInput = (id, value) => {
        // validate the id
        if (!variables.has(id)) {
            throw new Error(
                'Invalid input: variables key does not exist',
                variables.keys()
            );
        }
        // validate the value
        if (value.includes(',')) {
            value = value.replace(/\,/g, '');
        }
        const allowed = (value) => {
            const allowedDigits = '-0123456789.';
            const valueArr = value.split('');
            const hasAllowedDigit = valueArr.every((digit) =>
                allowedDigits.includes(digit)
            );
            return hasAllowedDigit;
        };
        if (!allowed(value)) {
            throw new Error(
                'Invalid input, value must only include numbers 0-9 and a period (.)'
            );
        }
        const periodcount = value.match(/\./g) || [];
        if (periodcount.length > 1) {
            throw new Error('too many perionds');
        }
        if (value === '00') {
            throw new Error(
                'Invalid input, cannot begin with more than one zero or period'
            );
        }
        if (value === '.') {
            value = '0.';
        }

        return value;
    };
    //* FORMAT THE EMELENT VALUES - so that they are easier to read
    function formatValue(id, value) {
        const style = variables.get(id).style;
        // convert value to a string
        const valueString = String(value);
        // if string is empty return nothing
        if (valueString == null) return;
        // formatter
        const intergerFormatter = new Intl.NumberFormat(undefined, {
            maximumFractionDigits: 5,
            minimumFractionDigits: 0,
        });
        // eveluated value
        if (!userValueIds.has(id)) {
            return intergerFormatter.format(valueString);
        }
        if (value === '-') {
            return value;
        }
        // user Inputed value
        const [interger, decimal] = valueString.split('.');
        if (decimal == null) return intergerFormatter.format(interger);
        return `${intergerFormatter.format(interger)}.${decimal}`;
    }
    //* RESET THE SOLVED VALUES - when a value is removed it should remove the remaining solved values
    const handleValuesReset = (newUserValueIds) => {
        const newVariablesMap = new Map(variables); // create a new Map copy
        newVariablesMap.forEach((variable) => {
            if (!newUserValueIds.has(variable.id)) {
                variable.value = ''; // set the values to empty string
            }
        });
        setVariables(newVariablesMap);
    };
    //* CLEAR ALL CALCULATOR VALUES
    const handleClear = () => {
        const newVariablesMap = new Map(variables); // create a new Map copy
        newVariablesMap.forEach((variable) => {
            variable.value = ''; // set the values to empty string
        });
        const newUserValueids = new Set();
        setVariables(newVariablesMap);
        setUserValueIds(newUserValueids);
    };
    //* RENDER EMELENTS *//
    return (
        <div className="values-set">
            {[...variables].map((variableArr, index) => {
                const id = variableArr[0];
                const item = variableArr[1];
                function itemClass() {
                    const userValue = userValueIds.has(id) && 'user-value';
                    const readOnly = item.readOnly && 'read-only';
                    return ['set-item', userValue, readOnly].join(' ');
                }
                return (
                    <div className={itemClass()} key={index}>
                        <label>
                            {item.name}
                            <input
                                id={id}
                                type="text"
                                readOnly={item.readOnly}
                                value={
                                    item.value !== ''
                                        ? formatValue(id, item.value)
                                        : item.value
                                }
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                );
            })}
            <div>
                <button className="values-clear" onClick={handleClear}>
                    Clear
                </button>
            </div>
        </div>
    );
}
