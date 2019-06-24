export class Program {
    entry_id: any;
    party_id: any;
    party_name:any;
    quality_id: any;
    quality_entry_id: any;
    quality_type: any;
    quality_name: any;
    program_given_by: any;
    remark: any;
    created_date: any;
    updated_date: any;
    created_by: any;
    updated_by: any;
    user_head_id: any;
    program_record: ProgramRecord[] = [];
}
export class ProgramRecord {
    entry_id: any;
    program_control_id: any;
    index: any;
    shade_no: any; // entry_id of shade list
    party_shade_no: any; // party_shade_no of shade list
    quantity: any;
    batch: any;
    lot_no: any;
    colour_tone: any; // colour_tone of shade list
    remark: any;
}
