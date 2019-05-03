export class User {
    token: any;
    user_id: any;
    company_id: any;
    designation: any;
    department: any;
    email_id: any;
    use_name: any;
    first_name: any;
    last_name: any;
    password: any;
    mobile_no: any;
    created_by: any;
    created_date: any;
    modified_by: any;
    modefied_date: any;
    have_quality:any = false;
    can_view_quality:any = false;
    can_add_quality:any = false;
    can_edit_quality:any = false;
    can_delete_quality:any = false;
    have_user:any = false;
    can_view_user:any = false;
    can_add_user:any = false;
    can_edit_user:any = false;
    can_delete_user:any = false;
    have_party:any = false;
    can_view_party:any = false;
    can_add_party:any = false;
    can_edit_party:any = false;
    can_delete_party:any = false;
    have_stock:any = false;
    can_view_stock:any = false;
    can_add_stock:any = false;
    can_edit_stock:any = false;
    can_delete_stock:any = false;
    constructor() {
        this.company_id = '';
    }
}
