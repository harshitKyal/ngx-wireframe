import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginModal } from '../../@theme/model/login-class';
import { AuthService } from '../../@theme/services/auth.service';


@Component({
    selector: 'nb-login',
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

    @ViewChild('f') loginForm: NgForm;
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
                if (!data[0].error) {
                    this.router.navigate(['/pages/party']);
                    this.toasterService.success('User Logged In Succesfully!');
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