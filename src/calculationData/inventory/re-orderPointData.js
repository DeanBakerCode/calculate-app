import reorder from './reorder.svg';
const reOrderPointData = {
    title: 'Re-Order Point', //  displaying title for this Calculator
    url: 'reOrderPoint',
    img: reorder,
    description: `The reorder point (ROP), also reorder level (ROL) or "optimal re-order level", is the level of inventory which triggers an action to replenish that particular inventory. It is a minimum amount of an item which a business holds in stock, such that, when stock falls to this amount, the item must be reordered. 
    It is normally calculated as the forecast usage during the replenishment lead time plus safety stock. It is assumed that there is no time lag between ordering and receipt of materials.`,
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
            name: 'Ave Lead Time Days:', //  displaying name for this variable
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
