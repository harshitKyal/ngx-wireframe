export class Fabric {
    entry_id: any;
    stock_id: any;
    stock_in_type: any;
    transfer_challan_no: any;
    party_id: any = '';
    party_name: any;
    date: any;
    bill_no: any;
    chl_no: any;
    bill_date: any;
    chl_date: any;
    lot_no: any;
    remark: any;
    bill_id: any;
    fabric_record: FabricInRecord[];
    record_count: any;
    created_date: any;
    updated_date: any;
    created_by: any;
    updated_by: any;
}

export class FabricInRecord {
    index: any;
    entry_id: any;
    control_id: any;
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