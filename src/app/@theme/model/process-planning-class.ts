export class ProcessPlanning {

}

export class FunctionObj {
    func_name: any;
    func_value: any = '';
    func_position: any;
    tempFunction: TempFunctionObj;
    pumpMotorFunction: PumpMotorFunctionObj;
    waterDrainFunction: WaterDrainFunctionObj;
    dosingFunction: DosingFunctionObj;
    operatorFunction: OperatorMessageObj;
}

export class TempFunctionObj {
    index: any;
    set_value: any;
    rate_of_rise: any;
    hold_time: any;
    pressure: any = false;
}
export class WaterDrainFunctionObj {
    index: any;
    type: any = 'water';
    water_type: any = '';
    drain_type: any = '';
    fabric_ratio: any = 0;
    jet_level: any = false;
}
export class PumpMotorFunctionObj {
    index: any;
    pump_speed: any;
}
export class OperatorMessageObj {
    index: any;
    operator_code: any;
    operator_message: any;
    start_at_temp: any;
}
export class DosingFunctionObj {
    index: any;
    have_dose: any = false;
    dose_at_temp: any;
    fill_type: any = 'Pre Fill Machine Water';
    dosing_percentage: any = 'Level 1';
    dose_while_heating = false;
    dose_type: any = '';
    dosing_chemical: ChemicalReq[] = [];
}
export class Step {
    control_id: any;
    step_name: any;
    step_position: any;
    functionList: FunctionObj[];
}

export class DynamicProcessReq {
    process_name: any;
    entry_id: any;
    created_by: any;
    user_head_id: any;
    updated_by: any;
    created_date: any;
    updated_date: any;
    process_req_record: DynamicProcessRecordReq[];
}
export class DynamicProcessRecordReq {
    control_id: any;
    step_name: any;
    step_position: any;
    func_name: any;
    func_value: any = '';
    func_position: any;
    set_value: any;
    rate_of_rise: any;
    hold_time: any;
    pressure: any = false;
    water_type: any = '';
    drain_type: any = '';
    fabric_ratio: any;
    jet_level: any = false;
    have_dose: any = false;
    dose_at_temp: any;
    fill_type: any = 'Pre Fill Machine Water';
    dosing_percentage: any;
    pump_speed: any;
    operator_code: any;
    operator_message: any;
    start_at_temp: any;
    dose_while_heating = false;
    dose_type: any = '';
    dosing_chemical: ChemicalReq[] = [];
}
export class ChemicalReq {
    entry_id: any;
    index: any;
    control_id: any;
    item_id: any;
    item_name: any;
    supplier_name: any;
    concentration: any;
    lr_or_fabric_wt: any;
}