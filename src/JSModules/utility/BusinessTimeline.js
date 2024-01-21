export default class BusinessTimeline{
    constructor(timezone){
        this.timezone = timezone;
    }

    calculateWorkTime(){
        let data = [];
        this.calculatedWorkTime = data;
        return this.calculatedWorkTime;
    }
}