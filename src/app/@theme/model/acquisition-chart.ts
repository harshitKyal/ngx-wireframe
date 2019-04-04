export class BarChartData {
    chartLabel: string[];
    data: number[][];
}

export class BarChartReq {
    segment: any;
    start_date: any;
    end_date: any;
    channel_type: any;
    size: any;
    dimension: any;
    metric: any;
    constructor() {
        this.start_date = '14789889976';
        this.end_date = '15789889976';
        this.segment = 'leads_not_customers';
        this.size = 5;
        this.dimension = 'city';
    }
}