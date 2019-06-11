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
    constructor() {
        this.supplier_id = '';
    }
}
export class ColourStockRecord {
    item_name: any;
    item_id:any;
    quantity_per_box: any;
    index: any;
    entry_id: any;
    control_id: any;
    no_of_box: any;
    total_quantity: any;
    rate: any;
    amount: any;
    constructor(){
        this.item_id = '';
    }
}