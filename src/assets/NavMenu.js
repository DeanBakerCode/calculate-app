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
			{
				CalculatorName: 'template',
				to: '/sales/template',
				image: '',
			},
		],
	},
	{
		CategoryName: 'Inventory',
		to: '/inventory',
		calculators: [
			{
				CalculatorName: 'Min/Max',
				to: '/inventory/reorderpoint',
				image: '',
			},
		],
	},
];
export default NavMenu;
