import cpm from './cpm.svg';
const costPerThousand = {
    title: 'Cost Per Thousand (CPM)', //  displaying title for this Calculator
    url: 'costPerThousand',
    img: cpm,
    description: `Cost per thousand, also called Cost per mille (CPM) (in Latin, French and Italian, 'mille' means 'thousand'), is a commonly-used measurement in advertising.
        It is the cost an advertiser pays for one thousand views or impressions of an advertisement. Radio, television, newspaper, magazine, out-of-home advertising, and online advertising can be purchased on the basis of exposing the ad to one thousand viewers or listeners. 
        It is used in marketing as a benchmarking metric to calculate the relative cost of an advertising campaign or an ad message in a given medium.`,
    consideration: '',
    fact: "The 'M' in CPM, symbolises the roman numeral for Thousand",
    variables: {
        // collection of variables for this calculator
        CO: {
            name: 'Cost $', //  displaying title for this variable
            id: 'CO', // id of this variable eg: "OV" for Original Value
            style: 'currency', // "decimal" "currency" "percent" "unit"
            readOnly: false, // default value
            required: false, // default value, must have to evaluate any other value
            defaultMaxDecimalPlaces: 5, // default value
            defaultMinDecimalPlaces: 0, // default value
            value: '', // default value
            dependencies: ['IM', 'CM'], // variables that can be used to solve
            solve(IM, CM) {
                this.value = (CM / 1000) * IM;
            }, // method used to solve this.value
        },
        IM: {
            name: 'Impressions:', //  displaying title for this variable
            id: 'IM', // id of this variable eg: "OV" for Original Value
            style: 'decimal', // "decimal" "currency" "percent" "unit"
            readOnly: false, // default value
            required: false, // default value, must have to evaluate any other value
            defaultMaxDecimalPlaces: 0, // default value
            defaultMinDecimalPlaces: 0, // default value
            value: '', // default value
            dependencies: ['CO', 'CM'], // variables that can be used to solve
            solve(CO, CM) {
                this.value = (CO / CM) * 1000;
            }, // method used to solve this.value
        },
        CM: {
            name: 'CPM $', //  displaying title for this variable
            id: 'CM', // id of this variable eg: "OV" for Original Value
            style: 'currency', // "decimal" "currency" "percent" "unit"
            readOnly: false, // default value
            required: false, // default value, must have to evaluate any other value
            defaultMaxDecimalPlaces: 2, // default value
            defaultMinDecimalPlaces: 0, // default value
            value: '', // default value
            dependencies: ['CO', 'IM'], // variables that can be used to solve
            solve(CO, IM) {
                this.value = (CO / IM) * 1000;
            }, // method used to solve this.value
        },
    },
    requiredVariableCount: 2, // default value
};
export default costPerThousand;
