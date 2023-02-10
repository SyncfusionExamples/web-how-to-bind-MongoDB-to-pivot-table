var pivotObj = new ej.pivotview.PivotView({
	dataSourceSettings: {
    url: 'https://localhost:44346/pivot',
    enableSorting: true,
    columns: [
      { name: 'Year' }
    ],
    values: [
      { name: 'Sold', caption: "Units Sold"},
      { name: 'Amount', caption: "Sold Amount"}
    ],
    rows: [
      { name: 'Country' },
      { name: 'Products' }
    ]
	},
	showFieldList: true,
	width: '100%'
});
pivotObj.appendTo('#PivotView');