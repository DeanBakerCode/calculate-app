const profitMarginData = {
    title: 'Profit Margin',
    description:
        'Profit margin is a financial ratio that measures the percentage of profit earned by a company in relation to its revenue. Expressed as a percentage, it indicates how much profit the company makes for every dollar of revenue generated. Profit margin is important because this percentage provides a comprehensive picture of the operating efficiency of a business or an industry. All margin changes provide useful indicators for assessing growth potential, investment viability and the financial stability of a company relative to its competitors. Maintaining a healthy profit margin will help to ensure the financial success of a business, which will improve its ability to obtain loans.',
    variables: {
        CV: {
            name: 'Cost $',
            id: 'CV',
            style: 'currency',
            readOnly: false,
            required: false,
            defaultMaxDecimalPlaces: 5,
            defaultMinDecimalPlaces: 0,
            value: '',
            dependencies: ['MP', 'RV', 'PV'], // All variables can be used to solve
            solve(MP, RV, PV) {
                if (MP && RV) {
                    this.value = RV - (MP / 100) * RV;
                } else if (RV && PV) {
                    this.value = RV - PV;
                } else if ((MP, PV)) {
                    // fix this equation
                    this.value = PV / (MP / 100) - PV;
                }
            },
        },
        MP: {
            name: 'Margin %',
            id: 'MP',
            style: 'percent',
            readOnly: false,
            required: false,
            defaultMaxDecimalPlaces: 5,
            defaultMinDecimalPlaces: 0,
            value: '',
            dependencies: ['CV', 'RV', 'PV'], // All variables can be used to solve
            solve(CV, RV, PV) {
                if (RV && PV) {
                    this.value = (PV / RV) * 100;
                } else if (CV && RV) {
                    this.value = (1 - CV / RV) * 100;
                } else if ((CV, PV)) {
                    this.value = (PV / (CV + PV)) * 100;
                }
            },
        },
        RV: {
            name: 'Renenue $',
            id: 'RV',
            style: 'currency',
            readOnly: false,
            required: false,
            defaultMaxDecimalPlaces: 5,
            defaultMinDecimalPlaces: 0,
            value: '',
            dependencies: ['CV', 'MP', 'PV'], // All variables can be used to solve
            solve(CV, MP, PV) {
                if (CV && MP) {
                    this.value = CV / (1 - MP / 100);
                } else if (CV && PV) {
                    this.value = CV + PV;
                } else if ((MP, PV)) {
                    this.value = (MP / 100) * PV;
                }
            },
        },
        PV: {
            name: 'Profit $',
            id: 'PV',
            style: 'currency',
            readOnly: false,
            required: false,
            defaultMaxDecimalPlaces: 5,
            defaultMinDecimalPlaces: 0,
            value: '',
            dependencies: ['CV', 'MP', 'RV'], // All variables can be used to solve
            solve(CV, MP, RV) {
                if (CV && RV) {
                    this.value = RV - CV;
                } else if (MP && RV) {
                    this.value = (RV * MP) / 100;
                }
            },
        },
    },
    requiredVariableCount: 2,
};
export default profitMarginData;
