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
    water_type: any = '';
    drain_type: any = '';
    fabric_ratio: any;
    jet_level: any = false;
}
export class PumpMotorFunctionObj {
    index: any;
    pump_speed: any;
}
export class DosingFunctionObj {
    index: any;
    have_dose: any = false;
    dose_at_temp: any;
    fill_type: any = 'Pre Fill Machine Water';
    dosing_percentage: any;
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
    no_dying_bath: any;
    dc_multiplying_fac: any;
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
}