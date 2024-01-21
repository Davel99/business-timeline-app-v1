import WorkTime from "./WorkTime";
import Hour from "./Hour";

export default class BusinessTimeline{
    format = "en-US"
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

            startDate = new Date(startDate.toLocaleString(this.format, {timeZone: this.timezone}));
            endDate = new Date(endDate.toLocaleString(this.format, {timeZone: this.timezone}));

            let startHour = new Hour(startDate.getHours(), startDate.getMinutes());
            let endHour = new Hour(endDate.getHours(), endDate.getMinutes());

            dates.push(new WorkTime(startHour, endHour));
        });
        this.calculatedWorkTime = dates;
        return this.calculatedWorkTime;
    }
}