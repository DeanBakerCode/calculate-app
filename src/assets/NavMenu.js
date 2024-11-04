const NavMenu = [
	{
		CategoryName: 'Sales',
		to: '/sales',
		calculators: [
			{
				CalculatorName: 'Discount',
				to: '/sales/discount',
				image: '',
			},
			{
				CalculatorName: 'Profit Margin',
				to: '/sales/margin',
				image: '',
			},
		],
	},
	{
		CategoryName: 'Inventory',
		to: '/inventory',
		calculators: [
			{
				CalculatorName: 'Re-Order Point',
				to: '/inventory/reorderpoint',
				image: '',
			},
		],
	},
];
export default NavMenu;
