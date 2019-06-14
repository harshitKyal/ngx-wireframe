export class Program {
    entry_id: any;
    party_id: any;
    quality_id: any;
    program_given_by: any;
    remark: any;
    crated_date: any;
    updated_date: any;
    created_by: any;
    updated_by: any;
    user_head_id: any;
    program_record: ProgramRecord[] = [];
    new_cutting: any;
    new_cutting_record: NewCuttingRecord[] = [];
}
export class ProgramRecord {
    entry_id: any;
    program_control_id: any;
    index: any;
    shade_no: any;
    quantity: any;
    batch: any;
    lot_no: any;
    colour_tone: any;
    remark: any;
}
export class NewCuttingRecord {
    new_cutting_id: any;
    entry_id: any;
    new_cutting_control_id: any;
    index: any;
    quantity: any;
    batch: any;
    remark: any;
    colour_tone: any;
}