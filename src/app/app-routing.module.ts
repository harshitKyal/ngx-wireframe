import { ExtraOptions, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrintLayoutComponent } from './@theme/components/print-layout/print-layout.component';
import { InvoiceComponent } from './@theme/components/invoice/invoice.component';
import { AuthGuard } from './@theme/guard/auth-guard.service';

const routes: Routes = [
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule', canActivate: [AuthGuard] },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#NgxAuthModule',
  },
  {
    path: 'plc', loadChildren: './plc/plc.module#PlcModule', canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
  {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: InvoiceComponent }
    ]
  },
  {
    path: 'export',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice', component: InvoiceComponent }
    ]
  }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
