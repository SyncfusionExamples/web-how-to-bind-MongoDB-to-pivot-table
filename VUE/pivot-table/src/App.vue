<template>
  <div>
    <div class="control-section" style="overflow: auto">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :showFieldList="showFieldList"
        ></ejs-pivotview>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  FieldList,
  PivotViewComponent,
} from "@syncfusion/ej2-vue-pivotview";

export default {
  components: {
    'ejs-pivotview': PivotViewComponent
  },
  data () {
    return {
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
      showFieldList: true    
    }
  },
  methods: {
  },
  provide: {
    pivotview: [FieldList]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>