import { PivotView, FieldList } from '@syncfusion/ej2-pivotview';

PivotView.Inject(FieldList);

let pivotTableObj: PivotView = new PivotView({
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
  height: 350
});
pivotTableObj.appendTo('#PivotTable');