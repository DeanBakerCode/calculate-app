import { discountData, profitMarginData } from './sales/sales';
import { reOrderPointData, safetyStockData } from './inventory/inventory';
import { costPerThousand } from './marketing/marketing';

class category {
    constructor(name) {
        this.categoryName = name;
        this.to = '/' + name.toLowerCase();
        this.calculators = []; // category calculators
    }
    // this method adds the calculator files to their category class
    addCalc(data) {
        const addCalculator = {
            calculatorName: data.title,
            category: this.categoryName,
            to: this.to + '/' + data.url.toLowerCase(),
            img: '',
            data: data,
        };
        this.calculators.push(addCalculator);
    }
}
//- Category Sales
const sales = new category('Sales');
sales.addCalc(discountData);
sales.addCalc(profitMarginData);

//- Category Inventory
const inventory = new category('Inventory');
inventory.addCalc(reOrderPointData);
inventory.addCalc(safetyStockData);

//- Category Marketing
const marketing = new category('Marketing');
marketing.addCalc(costPerThousand);

//- All Categories
const atlas = [sales, inventory, marketing];

export default atlas;

const getcalculator = (categoryPrm, calculatorPrm) => {
    const category = getCategory(categoryPrm);
    const calculator = category.calculators.find(({ to }) =>
        to.includes(calculatorPrm)
    );
    return calculator;
};
const getCategory = (categoryPrm) => {
    const category = atlas.find(({ to }) => to.includes(categoryPrm));
    return category;
};
export { getCategory, getcalculator };
