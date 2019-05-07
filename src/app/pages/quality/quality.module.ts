import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityRoutingModule } from './quality-routing.module';
import { AddEditQualityComponent } from './add-edit-quality/add-edit-quality.component';
import { QualityComponent } from './quality.component';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewQualityComponent, MyLinkRendererComponent } from './view-quality/view-quality.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    NgxDatatableModule,
    NgSelectModule,
    ThemeModule,
    QualityRoutingModule,
    NgbModule,
    Ng2SmartTableModule
  ],
  declarations: [AddEditQualityComponent, QualityComponent,MyLinkRendererComponent, ViewQualityComponent],
  entryComponents: [MyLinkRendererComponent]
})
export class QualityModule { }
