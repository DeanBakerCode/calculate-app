const discountData = {
    title: 'Discount',
    url: 'discount',
    requiredVariableCount: 2,
    description:
        'Discount is the reduction in the price of goods or services offered by shopkeepers at the marked price. This percentage of the rebate is usually offered to increase the sales or clear the old stock of goods. The List price or Marked price is the price of an article as declared by the seller or the manufacturer, without any price reduction. The selling price is the actual price at which an article is sold after any reduction or discounts in the list price. "Off", "Reduction" are some common terms used to describe discounts. It should be noted that a discount is always calculated on the Marked price (List price) of the article.',
    variables: {
        OV: {
            name: 'Original $',
            id: 'OV',
            style: 'currency',
            readOnly: false,
            defaultMaxDecimalPlaces: 5,
            defaultMinDecimalPlaces: 0,
            value: '',
            dependencies: ['DP', 'FV'],
            solve(DP, FV) {
                this.value = FV / (1 - DP / 100);
            },
        },
        DP: {
            name: 'Discount %',
            id: 'DP',
            style: 'percent',
            readOnly: false,
            defaultMaxDecimalPlaces: 5,
            defaultMinDecimalPlaces: 0,
            value: '',
            dependencies: ['OV', 'FV'],
            solve(OV, FV) {
                this.value = ((OV - FV) / OV) * 100;
            },
        },
        DV: {
            name: 'Discounted $',
            id: 'DV',
            style: 'currency',
            readOnly: true,
            defaultMaxDecimalPlaces: 5,
            defaultMinDecimalPlaces: 0,
            value: '',
            dependencies: ['OV', 'FV'],
            solve(OV, FV) {
                this.value = OV - FV;
            },
        },
        FV: {
            name: 'Final $',
            id: 'FV',
            style: 'currency',
            readOnly: false,
            defaultMaxDecimalPlaces: 5,
            defaultMinDecimalPlaces: 0,
            value: '',
            dependencies: ['OV', 'DP'],
            solve(OV, DP) {
                this.value = OV - (OV * DP) / 100;
            },
        },
    },
};
export default discountData;
