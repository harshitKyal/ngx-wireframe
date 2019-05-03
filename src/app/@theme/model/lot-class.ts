export class LotMast {
    entry_id: any;
    lot_id: any;
    quality_entry_id: any;
    quality_name: any;
    quality_type: any;
    remark: any;
    created_date: any;
    updated_date: any;
    created_by: any;
    updated_by: any;
    lot_data: LotData[];
    constructor() {
        this.quality_entry_id = '';
    }
}

export class LotData {
    entry_id: any;
    control_id: any;
    gr: any;
    batch_no: any;
    no_of_cones_taka: any;
    mtr: any;
    wt: any;
    lot_quality_detail: LotWeightMtrDetail[];
    unit: any;
    index: any;
    constructor() {
        // this.gr = '';
        this.unit = '';
    }
}

export class LotWeightMtrDetail {
    quality: any;
    control_id_gr_detail: any;
    constructor() {
        this.quality = '';
    }
}
