import numericCalculator from './calculatorTypes/numericCalculator';
import discountData from './sales/discountData';

class category {
    constructor(name) {
        this.categoryName = name;
        this.to = '/' + name;
        this.calculators = []; // category calculators
    }
    addCalc(data) {
        const addCalculator = {
            calculatorName: data.name,
            category: this.categoryName,
            to: this.to + '/' + data.name,
            data: data,
        };
        this.calculators.push(addCalculator);
    }
}
//- Category Sales
const sales = new category('Sales');
sales.addCalc(discountData);

//- Category Inventory
const inventory = new category('Inventory');

//- Categories
const atlas = [sales, inventory];

export default atlas;

const getcalculator = (categoryPrm, calculatorPrm) => {
    const category = getCategory(categoryPrm);
    const calculator = category.calculators.find(
        ({ calculatorName }) => calculatorName === calculatorPrm
    );
    return calculator;
};
const getCategory = (categoryPrm) => {
    const category = atlas.find(
        ({ categoryName }) => categoryName === categoryPrm
    );
    return category;
};
export { getCategory, getcalculator };
