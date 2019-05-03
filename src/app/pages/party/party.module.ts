import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditPartyComponent } from './add-edit-party/add-edit-party.component';
import { PartyComponent } from './party.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartyRoutingModule } from './party-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../@theme/theme.module';
import { ViewPartyComponent, CustomRendererPartyComponent } from './view-party/view-party.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    NgbModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    PartyRoutingModule,
    NgSelectModule,
    ThemeModule
  ],
  declarations: [AddEditPartyComponent, PartyComponent,CustomRendererPartyComponent, ViewPartyComponent],
  entryComponents :[CustomRendererPartyComponent]
})
export class PartyModule { }
