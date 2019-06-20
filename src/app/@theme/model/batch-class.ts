export class BatchMast {
    entry_id: any;
    batch_id: any;
    quality_entry_id: any;
    quality_name: any;
    quality_type: any;
    remark: any;
    created_date: any;
    updated_date: any;
    created_by: any;
    updated_by: any;
    batch_data: BatchData[];
    constructor() {
        this.quality_entry_id = '';
    }
}

export class BatchData {
    entry_id: any;
    control_id: any;
    gr: any;
    batch_no: any;
    no_of_cones_taka: any;
    mtr: any;
    wt: any;
    batch_quality_detail: BatchWeightMtrDetail[];
    unit: any;
    index: any;
    constructor() {
        // this.gr = '';
        this.unit = '';
    }
}

export class BatchWeightMtrDetail {
    quantity: any;
    control_id_gr_detail: any;
    value: any;
    display: any;
    batch_mast_control_id: any;
    entry_id: any;
    constructor() {
        this.quantity = '';
    }
}
