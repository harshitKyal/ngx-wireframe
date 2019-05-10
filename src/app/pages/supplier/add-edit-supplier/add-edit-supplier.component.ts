import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../../@theme/model/supplier-class';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from '../../../@theme/services/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-add-edit-supplier',
  templateUrl: './add-edit-supplier.component.html',
  styleUrls: ['./add-edit-supplier.component.scss']
})
export class AddEditSupplierComponent implements OnInit {

  supplierModal: Supplier;
  id: any;
  subBtnName = '';
  topHeader = '';
  constructor(private toasterService: ToastrService, private route: ActivatedRoute,
    private router: Router, private supplierService: SupplierService) {
    this.supplierModal = new Supplier();
  }

  ngOnInit() {
    this.onPageLoad();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47 ) ) {
      return false;
    }
    return true;
  }

  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.subBtnName = 'Update';
      this.topHeader = 'Edit Supplier';
      this.supplierService.getSupplierById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.supplierModal = data[0].data[0];
          } else {
            this.toasterService.error(data[0].message);
          }
        }, error => {
          this.toasterService.error(error);
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Supplier';
    }
  }


  onCustomFormSubmit(form: NgForm) {
    if (this.id) {
      this.supplierService.updateSupplier(this.supplierModal).subscribe(data => {
        if (!data[0].error) {
          this.toasterService.success("Updated Successfully");
          form.resetForm();
          this.router.navigate(['/pages/supplier/view-supplier-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      console.log(this.supplierModal)
      this.supplierService.addSupplier(this.supplierModal).subscribe(data => {
        // data = data[0]
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/supplier/view-supplier-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    }
  }
}

