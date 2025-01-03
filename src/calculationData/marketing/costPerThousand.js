const costPerThousand = {
    title: 'Cost Per Thousand (CPM)', //  displaying title for this Calculator
    url: 'costPerThousand',
    description:
        'In digital marketing, CPM refers to what an advertiser pays for 1,000 impressions of an advertisement on a web page. What is important about CPM marketing when it comes to digital marketing is understanding the meaning of an impression. An impression means the ad, as an element of a web page, loaded and received a view. This isn’t the same as a page view.', // displaying description for this calculator, usually from Wiki or Dictionary
    consideration: '',
    fact: "The 'M' in CPM, symbolises the roman numeral for Thousand",
    variables: {
        // collection of variables for this calculator
        CO: {
            name: 'Cost', //  displaying title for this variable
            id: 'CO', // id of this variable eg: "OV" for Original Value
            style: 'currency', // "decimal" "currency" "percent" "unit"
            readOnly: false, // default value
            required: false, // default value, must have to evaluate any other value
            defaultMaxDecimalPlaces: 5, // default value
            defaultMinDecimalPlaces: 0, // default value
            value: '', // default value
            dependencies: ['IM', 'CM'], // variables that can be used to solve
            solve(IM, CM) {
                this.value = IM * CM;
            }, // method used to solve this.value
        },
        IM: {
            name: 'Impressions', //  displaying title for this variable
            id: 'IM', // id of this variable eg: "OV" for Original Value
            style: 'decimal', // "decimal" "currency" "percent" "unit"
            readOnly: false, // default value
            required: false, // default value, must have to evaluate any other value
            defaultMaxDecimalPlaces: 0, // default value
            defaultMinDecimalPlaces: 0, // default value
            value: '', // default value
            dependencies: ['CO', 'CM'], // variables that can be used to solve
            solve(CO, CM) {
                this.value = CO / CM;
            }, // method used to solve this.value
        },
        CM: {
            name: 'CPM', //  displaying title for this variable
            id: 'CM', // id of this variable eg: "OV" for Original Value
            style: 'currency', // "decimal" "currency" "percent" "unit"
            readOnly: false, // default value
            required: false, // default value, must have to evaluate any other value
            defaultMaxDecimalPlaces: 2, // default value
            defaultMinDecimalPlaces: 0, // default value
            value: '', // default value
            dependencies: ['CO', 'IM'], // variables that can be used to solve
            solve(CO, IM) {
                this.value = CO / IM;
            }, // method used to solve this.value
        },
    },
    requiredVariableCount: 2, // default value
};
export default costPerThousand;
