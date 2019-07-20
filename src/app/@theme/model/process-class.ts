export class Process {
    process_name: any;
    entry_id: any;
    no_dying_bath: any;
    dc_multiplying_fac: any;
    created_by: any;
    updated_by: any;
    created_date: any;
    updated_date: any;
    user_head_id: any;
    process_record: ProcessRecord[];
}
export class ProcessRecord {
    control_id: any;
    type: any;
    temperature: any;
    plc_program_no: any;
    hold_time: any;
    rate_temperature: any;
    process_sub_record: ProcessSubRecord[];
}

export class ProcessSubRecord {
    entry_id: any;
    index: any;
    item_id: any;
    item_name: any;
    concentration: any;
    item_by: any;
    supplier_name: any;


}

export class ProcessReq {
    process_name: any;
    entry_id: any;
    no_dying_bath: any;
    dc_multiplying_fac: any;
    created_by: any;
    user_head_id: any;
    updated_by: any;
    created_date: any;
    updated_date: any;
    process_req_record: ProcessReqRecord[];
}
export class ProcessReqRecord {
    control_id: any;
    type: any;
    temperature: any;
    plc_program_no: any;
    hold_time: any;
    rate_temperature: any;
    entry_id: any;
    index: any;
    item_id: any;
    item_name: any;
    concentration: any;
    item_by: any;
    supplier_name: any;

}