export class ColourStock {
    entry_id: any;
    purchase_id: any;
    supplier_name: any;
    supplier_id: any
    bill_no: any;
    bill_date: any;
    chl_no: any;
    chl_date: any;
    remark: any;
    bill_amount: any;
    total_amount: any;
    colour_stock_record: ColourStockRecord[];
    created_by: any;
    updated_by: any;
    created_date: any;
    updated_date: any;
    user_head_id: any;
    constructor() {
        this.supplier_id = '';
    }
}

export class ColourStockRecord {
    item_name: any;
    item_id: any;
    supplier_item_id: any;
    quantity_per_box: any;
    index: any;
    entry_id: any;
    control_id: any;
    no_of_box: any;
    total_quantity: any;
    rate: any;
    amount: any;
    constructor() {
        this.item_id = '';
    }
}

export class ColourStockBox {
    entry_id: any;
    colour_stock_mast_control_id: any;
    colour_stock_data_control_id: any;
    quantity_per_box: any;
    rate: any;
    is_issued: any;
}