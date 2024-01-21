export default class BusinessTimeline{
    constructor(timezone){
        this.timezone = timezone;
    }

    calculateWorkTime(workTimes){
        let dates = [];
        workTimes.forEach(workTime => {
            let start = workTime.startTime;
            let end = workTime.endTime;

            let startDate = new Date();
            let endDate = new Date();

            startDate.setHours(start.hour, start.min, 0);
            endDate.setHours(end.hour, end.min, 0);

            dates.push([startDate, endDate]);
        });
        this.calculatedWorkTime = dates;
        return this.calculatedWorkTime;
    }
}