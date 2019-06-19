export class Party {
    entry_id: any;
    party_name: any;
    party_address1: any;
    party_address2: any;
    contact_no: any;
    pincode: any;
    city: any;
    state: any;
    GSTIN: any;
    mail_id: any;
    debtor: any;
    creditor: any;
    internal_transfer: any;
    created_date: any;
    created_by: any;
    updated_date: any;
    updated_by: any;
    user_head_id : any;
    constructor() {
    }
}

export class PartyReqObj {
    pageNumber: any;
    size: any;
    sortBy: any;
    sortType: any;
    filterBy: FilterData[];
    constructor() {
        this.size = 5;
        this.pageNumber = 0;
        this.sortBy = 'party_id';
        this.sortType = 'asc';
    }
}

export class FilterData {
    filterBy: any;
    filterValue: any;
}
export class SelectBody {
    name: any;
    constructor() {
        this.name = '';
    }
}