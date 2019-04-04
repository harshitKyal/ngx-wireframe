export class CardReqObj {
    segment: any;
    start_date: any;
    end_date: any;
    channel_type: any;
    constructor() {
        this.start_date = '14789889976';
        this.end_date = '15789889976';
        this.segment = 'leads_not_customers';
    }
}

export class CardResponseObj {
    title: any;
    count: any;
    percentage: any;
    increment: boolean;
}
