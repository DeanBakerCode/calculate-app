const discountData = {
    name: 'Discount',
    description:
        'Profit margin is a financial ratio that measures the percentage of profit earned by a company in relation to its revenue. Expressed as a percentage, it indicates how much profit the company makes for every dollar of revenue generated. Profit margin is important because this percentage provides a comprehensive picture of the operating efficiency of a business or an industry. All margin changes provide useful indicators for assessing growth potential, investment viability and the financial stability of a company relative to its competitors. Maintaining a healthy profit margin will help to ensure the financial success of a business.',
    // put the below in a new object seperating th emath calculation from the top display focused properties
    // should make the decimal places dynamic but use this as a default
    variables: {
        OV: {
            title: 'Original $',
            id: 'OV',
            style: 'currency',
            readOnly: false,
            maxFractionDigits: 5,
            minFractionDigits: 0,
            value: '',
            dependencies: ['DP', 'FV'],
            solve(DP, FV) {
                this.value = FV / (1 - DP / 100);
            },
        },
        DP: {
            title: 'Discount %',
            id: 'DP',
            style: 'percent',
            readOnly: false,
            maxFractionDigits: 5,
            minFractionDigits: 0,
            value: '',
            dependencies: ['OV', 'FV'],
            solve(OV, FV) {
                this.value = ((OV - FV) / OV) * 100;
            },
        },
        DV: {
            title: 'Discounted $',
            id: 'DV',
            style: 'currency',
            readOnly: true,
            maxFractionDigits: 5,
            minFractionDigits: 0,
            value: '',
            dependencies: ['OV', 'FV'],
            solve(OV, FV) {
                this.value = OV - FV;
            },
        },
        FV: {
            title: 'Final $',
            id: 'FV',
            style: 'currency',
            readOnly: false,
            maxFractionDigits: 5,
            minFractionDigits: 0,
            value: '',
            dependencies: ['OV', 'DP'],
            solve(OV, DP) {
                this.value = OV - (OV * DP) / 100;
            },
        },
    },
    requiredVariableCount: 2,
};
export default discountData;
