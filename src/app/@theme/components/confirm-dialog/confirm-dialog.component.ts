import { Component, OnInit, Inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
    public confirmMessage: any = '';
    public title: any = '';
    @Input() message;
    @Input() titleFrom;
    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
        this.confirmMessage = this.message;
        this.title = this.titleFrom;
    }
}
