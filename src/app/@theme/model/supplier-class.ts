export class Supplier {
    supplier_name: any;
    discount_percentage: any;
    gst_percentage: any;
    payment_terms: any;
    remark: any;
    created_date: any;
    updated_date: any;
    entry_id: any;
    is_active: any;
    created_by: any;
    updated_by: any;
}
export class SupplierRate {
    supplier_control_id: any;
    supplier_rate_list: SupplierRateRecord[];
}
export class SupplierRateRecord {
    index: any;
    entry_id: any;
    item_name: any;
    rate: any;
    is_active: any;
    created_date: any;
    updated_date: any;
    created_by: any;
    updated_by: any;
    discount_rate: any;
    gst_rate: any;
}

export class SupplierItemRecord {
    supplier_name: any;
    supplier_control_id: any;
    entry_id: any;
    item_name: any;
    rate: any;
    discount_rate: any;
    gst_rate: any;
}