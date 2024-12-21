import discountData from './sales/discountData';
import profitMarginData from './sales/profitMargin';

class category {
    constructor(name) {
        this.categoryName = name;
        this.to = '/' + name;
        this.calculators = []; // category calculators
    }
    addCalc(data) {
        const addCalculator = {
            calculatorName: data.title,
            category: this.categoryName,
            to: this.to + '/' + data.title,
            data: data,
        };
        this.calculators.push(addCalculator);
    }
}
//- Category Sales
const finance = new category('Finance');
finance.addCalc(discountData);
finance.addCalc(profitMarginData);
finance.addCalc('more coming...');

//- Category Inventory
const inventory = new category('Inventory');
inventory.addCalc('Re-order Point');

//- Categories
const atlas = [finance, inventory];

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
