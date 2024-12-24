import { discountData, profitMarginData } from './sales/sales';
import { reOrderPointData, safetyStockData } from './inventory/inventory';

class category {
    constructor(name) {
        this.categoryName = name;
        this.to = '/cat/' + name;
        this.calculators = []; // category calculators
    }
    addCalc(data) {
        const addCalculator = {
            calculatorName: data.title,
            category: this.categoryName,
            to: this.to + '/calc/' + data.title,
            img: '',
            data: data,
        };
        this.calculators.push(addCalculator);
    }
}
//- Category Sales
const finance = new category('Finance');
finance.addCalc(discountData);
finance.addCalc(profitMarginData);

//- Category Inventory
const inventory = new category('Inventory');
inventory.addCalc(reOrderPointData);
inventory.addCalc(safetyStockData);

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
