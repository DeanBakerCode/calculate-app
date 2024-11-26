const discountData = {
    name: 'Discount',
    requiredVariableCount: 2,
    description:
        'Profit margin is a financial ratio that measures the percentage of profit earned by a company in relation to its revenue. Expressed as a percentage, it indicates how much profit the company makes for every dollar of revenue generated. Profit margin is important because this percentage provides a comprehensive picture of the operating efficiency of a business or an industry. All margin changes provide useful indicators for assessing growth potential, investment viability and the financial stability of a company relative to its competitors. Maintaining a healthy profit margin will help to ensure the financial success of a business.',
    variables: {
        OP: {
            name: 'Original Price',
            id: 'OP',
            displayAs: 'currency',
            decimals: 2,
            readOnly: false,
            value: '',
            solve(allVariables) {
                const DV = allVariables.get('DV').value;
                const DP = allVariables.get('DP').value;
                const FP = allVariables.get('FP').value;

                if (DV && DP) {
                    this.value = DV / (DP / 100);
                } else if (DP && FP) {
                    this.value = FP * (DP / 100);
                } else {
                    throw new Error('Cannot solve:', this.name);
                }
            },
        },
        DP: {
            name: 'Discount Percentage',
            id: 'DP',
            displayAs: 'percentage',
            decimals: 2,
            readOnly: false,
            value: '',
            solve(allVariables) {
                const OP = allVariables.get('OP').value;
                const FP = allVariables.get('FP').value;
                if (OP && FP) {
                    this.value = (DV / OP) * 100;
                } else {
                    throw new Error('Cannot solve:', this.name);
                }
            },
        },
        DV: {
            name: 'Discounted value',
            id: 'DV',
            displayAs: 'currency',
            decimals: 2,
            readOnly: true,
            value: '',
            solve(allVariables) {
                const OP = allVariables.get('OP').value;
                const DP = allVariables.get('DP').value;
                const FP = allVariables.get('FP').value;
                if (OP && DP) {
                    this.value = OP * (DP / 100);
                } else if (OP && FP) {
                    this.vale = OP - FP;
                } else {
                    throw new Error('Cannot solve:', this.name);
                }
            },
        },
        FP: {
            name: 'Final Price',
            id: 'FP',
            displayAs: 'currency',
            decimals: 2,
            readOnly: false,
            value: '',
            solve(allVariables) {
                const OP = allVariables.get('OP').value;
                const DV = allVariables.get('DV').value;
                const DP = allVariables.get('DP').value;

                if (OP && DV) {
                    this.value = OP - DV;
                } else if (OP && DP) {
                    this.value = OP * (1 - DP / 100);
                } else {
                    throw new Error('Cannot solve:', this.name);
                }
            },
        },
    },
};
export default discountData;
