import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';

import { Subscriber, Subscription } from 'rxjs';
import { PrintService } from '../../services/print.service';


@Component({
  selector: 'app-print-layout',
  templateUrl: './print-layout.component.html',
  styleUrls: ['./print-layout.component.css']
})
export class PrintLayoutComponent implements OnInit {
  d: Subscription;
  
  @ViewChild('content') content: ElementRef


  constructor(private printService: PrintService) {

  }

  ngOnInit() {
    if (this.printService.isExport) {
      var pdf = new jspdf('p', 'pt', 'a4');
      pdf.addHTML(document.getElementById('printpdf'), function() {
        pdf.save('quality.pdf');
      });
      // html2canvas(document.getElementById('printpdf')).then(canvas => {
      //   var imgWidth = 208;
      //   var pageHeight = 295;
      //   var imgHeight = canvas.height * imgWidth / canvas.width;
      //   var heightLeft = imgHeight;

      //   const contentDataURL = canvas.toDataURL('image/png')
      //   let pdf = new jspdf('p', 'mm', 'a5'); // A4 size page of PDF  
      //   var position = 0;
      //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      //   pdf.save('MYPdf.pdf'); // Generated PDF  
      //   //  window.close();
      // });
    }
    // } else {
    //   this.flag = true;
    // }

  }
}
