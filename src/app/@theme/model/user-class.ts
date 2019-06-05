export class User {
    token: any;
    user_id: any;
    company_id: any;
    designation: any;
    department: any;
    email_id: any;
    user_name: any;
    first_name: any;
    last_name: any;
    password: any;
    mobile_no: any;
    created_by: any;
    created_date: any;
    modified_by: any;
    modefied_date: any;
    user_head_id: any;
    updated_by:any;
    group_head_check_box : any;
    userPermission: UserPermission[];
    have_quality: any = false;
    can_view_quality: any = false;
    can_add_quality: any = false;
    can_edit_quality: any = false;
    can_delete_quality: any = false;
    have_user: any = false;
    can_view_user: any = false;
    can_add_user: any = false;
    can_edit_user: any = false;
    can_delete_user: any = false;
    have_party: any = false;
    can_view_party: any = false;
    can_add_party: any = false;
    can_edit_party: any = false;
    can_delete_party: any = false;
    have_stock: any = false;
    can_view_stock: any = false;
    can_add_stock: any = false;
    can_edit_stock: any = false;
    can_delete_stock: any = false;
    
    constructor() {
        this.company_id = '';
        this.designation = '';
        this.user_head_id = '';
    }
}

export class UserPermission {
    form_name: any;
    can_view: any;
    can_add: any;
    can_edit: any;
    can_delete: any;
    can_view_group: any;
    can_view_all: any;
    can_edit_group: any;
    can_edit_all: any;
    can_delete_group: any;
    can_delete_all: any;
    constructor() {
        this.can_add = false;
        this.can_delete = false;
        this.can_edit = false;
        this.can_view = false;
        this.can_delete_all = false;
        this.can_delete_group = false;
        this.can_edit_all = false;
        this.can_edit_group = false;
        this.can_view_all = false;
        this.can_view_group = false;
    }
}

export class ViewReqObj {
    created_by = null;
    user_head_id = null;
    group_user_ids = null;
}