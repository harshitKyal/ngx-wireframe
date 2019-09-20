import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginModal } from '../../@theme/model/login-class';
import { AuthService } from '../../@theme/services/auth.service';
import { MENU_ITEMS } from '../../pages/pages-menu';


@Component({
    selector: 'nb-login',
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

    userPermission = [];
    itemList = MENU_ITEMS;
    @ViewChild('f') loginForm: NgForm;
    plcDemo = false;
    loginReq: LoginModal;
    constructor(private router: Router, private authService: AuthService, private toasterService: ToastrService,
        private route: ActivatedRoute) {
        this.loginReq = new LoginModal();
    }

    // On submit button click
    onSubmit() {
        this.authService.signinUser(this.loginReq.UserName, this.loginReq.Password).subscribe(
            data => {
                console.log((data))
                if (!data[0].error && data[0].data.hasRows) {
                    if (this.plcDemo) {
                        this.router.navigate(['/plc']);
                    } else {
                        this.userPermission = [];
                        this.userPermission = data[0].data.user_permission;
                        if (this.userPermission.length) {
                            var flag = 0;
                            this.userPermission.forEach(ele => {
                                if (!flag) {
                                    if (ele.can_view) {
                                        this.itemList.forEach(subele => {
                                            if (!flag) {
                                                if (subele.title === ele.form_name) {
                                                    this.router.navigate([subele.children[0].link]);
                                                    flag = 1;
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                            this.toasterService.success('User Logged In Succesfully!');
                        } else {
                            this.router.navigate(['/auth']);
                        }
                    }
                } else {
                    this.router.navigate(['/auth']);
                    this.toasterService.error(data[0].message);
                }
                this.loginForm.reset();
            },
            error => {
                // this._toasterService.error('User login failed!!');
            });
    }
}