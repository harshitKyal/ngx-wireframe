import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityRoutingModule } from './quality-routing.module';
import { AddEditQualityComponent } from './add-edit-quality/add-edit-quality.component';
import { QualityComponent, MyLinkRendererComponent } from './quality.component';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    QualityRoutingModule,
    FormsModule,
    AgGridModule,
    NgbModule,
    Ng2SmartTableModule
  ],
  declarations: [AddEditQualityComponent, QualityComponent,MyLinkRendererComponent],
  entryComponents: [MyLinkRendererComponent]
})
export class QualityModule { }
