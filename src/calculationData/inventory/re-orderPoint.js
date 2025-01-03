const reOrderPointData = {
    title: 'Re-Order Point', //  displaying title for this Calculator
    url: 'reOrderPoint',
    description:
        "A Re-Order Point (ROP) is the level of inventory at which a business should place a new order to avoid running out of stock. It's also known as the reorder level or optimal reorder level", // displaying description for this calculator, usually from Wiki or Dictionary
    variables: {
        US: {
            name: 'Daily Unit Sales:', //  displaying name for this variable
            id: 'US', // id of this variable eg: "OV" for Original Value
            style: 'unit', // "decimal" "currency" "percent" "unit"
            readOnly: false, // default value
            required: false, // default value
            defaultMaxDecimalPlaces: 0, // default value
            defaultMinDecimalPlaces: 0, // default value
            value: '', // default value
            dependencies: ['LT', 'RP'], // variables that can be used to solve
            solve(LT, RP) {
                this.value = RP / LT;
            },
        },
        LT: {
            name: 'Lead Time Days:', //  displaying name for this variable
            id: 'LT', // id of this variable eg: "OV" for Original Value
            style: 'unit', // "decimal" "currency" "percent" "unit"
            readOnly: false, // default value
            required: false, // default value
            defaultMaxDecimalPlaces: 0, // default value
            defaultMinDecimalPlaces: 0, // default value
            value: '', // default value
            dependencies: ['US', 'RP'], // variables that can be used to solve
            solve(US, RP) {
                this.value = RP / US;
            },
        },
        RP: {
            name: 'Re-Order Point:', //  displaying name for this variable
            id: 'RP', // id of this variable eg: "OV" for Original Value
            style: 'unit', // "decimal" "currency" "percent" "unit"
            readOnly: false, // default value
            required: false, // default value
            defaultMaxDecimalPlaces: 0, // default value
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
export default reOrderPointData;
// US: 5
// LT: 9
// RP: 45
