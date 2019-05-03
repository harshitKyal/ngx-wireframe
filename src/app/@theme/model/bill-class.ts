export class Bill {
    entry_id: any;
    stock_id: any;
    stock_in_type: any;
    transfer_challan_no: any;
    party_name: any;
    date: any;
    bill_no: any;
    chl_no: any;
    bill_date: any;
    chl_date: any;
    batch_no: any;
    remark: any;
    bill_id: any;
    bill_record: BillRecord[];
    record_count: any;
    created_date: any;
    updated_date: any;
    created_by: any;
    updated_by: any;
}

export class BillRecord {
    index: any;
    entry_id: any;
    contol_id: any;
    gr: any;
    quality_entry_id: any;
    quality_name: any;
    quality_type: any;
    mtr: any;
    wt: any;
    no_of_cones: any;
    no_of_boxes: any;
    created_date: any;
    updated_date: any;
    created_by: any;
    updated_by: any;
}