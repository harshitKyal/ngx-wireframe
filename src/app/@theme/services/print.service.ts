import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Quality } from '../model/quality-class';
import { BehaviorSubject } from 'rxjs';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;
  isExport = true;
  isPrint = false;
  // isExportData: BehaviorSubject<any> = new BehaviorSubject(false);
  pdfContent: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private router: Router) { }

  printDocument(documentName: string, documentData: string[], isPdf) {
    this.isPrinting = true;
    let url: any;
    if (isPdf) {
      url = this.router.createUrlTree(['./export/invoice']);
      window.open(url.toString(), '_blank');
    } else {
      this.isExport = false;
      this.isPrint = true;
      this.router.navigate(['./',
        {
          outlets: {
            'print': ['print', documentName, documentData.join()]
          }
        }]);
    }
  }

  onDataReady() {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate([{ outlets: { print: null } }]);
    });
  }
}
