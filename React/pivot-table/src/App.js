import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
  let dataSourceSettings = {
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
  };

  return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
    <Inject services={[FieldList]}/></PivotViewComponent>);
};
export default App;
