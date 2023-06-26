import { Component, OnInit } from '@angular/core';
import { FieldListService, IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-root',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings
  [showFieldList]="true"></ejs-pivotview>`,
  providers: [FieldListService],
})
export class AppComponent implements OnInit {
    public pivotData: IDataSet[] | undefined;
    public dataSourceSettings: IDataOptions | undefined;

    ngOnInit(): void {

        this.dataSourceSettings = {
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
    }
}