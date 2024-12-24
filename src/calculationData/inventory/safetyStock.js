const safetyStockData = {
    title: 'Safety Stock', //  displaying title for this Calculator
    description:
        "Safety stock is extra inventory that a business keeps to reduce the risk of stockouts by serving as buffer against fluctuations in demand. It doesn't however garrentee not stocking out.", // displaying description for this calculator, usually from Wiki or Dictionary
    variables: {
        US: {
            name: 'Daily Unit Sales', //  displaying name for this variable
            id: '', // id of this variable eg: "OV" for Original Value
            style: '', // "decimal" "currency" "percent" "unit"
            readOnly: false, // default value
            required: false, // default value, must have to evaluate any other value
            defaultMaxDecimalPlaces: 5, // default value
            defaultMinDecimalPlaces: 0, // default value
            value: '', // default value
            dependencies: ['LT', 'SS'], // variables that can be used to solve
            solve(LT, SS) {
                this.value = LT / SS;
            },
        },
        LT: {
            name: 'Maximum Lead Time Days', //  displaying name for this variable
            id: '', // id of this variable eg: "OV" for Original Value
            style: '', // "decimal" "currency" "percent" "unit"
            readOnly: false, // default value
            required: false, // default value, must have to evaluate any other value
            defaultMaxDecimalPlaces: 5, // default value
            defaultMinDecimalPlaces: 0, // default value
            value: '', // default value
            dependencies: ['US', 'SS'], // variables that can be used to solve
            solve(US, SS) {
                this.value = US / SS;
            },
        },
        SS: {
            name: 'Safety Stock', //  displaying name for this variable
            id: '', // id of this variable eg: "OV" for Original Value
            style: '', // "decimal" "currency" "percent" "unit"
            readOnly: false, // default value
            required: false, // default value, must have to evaluate any other value
            defaultMaxDecimalPlaces: 5, // default value
            defaultMinDecimalPlaces: 0, // default value
            value: '', // default value
            dependencies: ['US', 'LT'], // variables that can be used to solve
            solve(US, LT) {
                this.value = US * LT;
            },
        },
    },
    requiredVariableCount: 2, // default value
};
export default safetyStockData;
