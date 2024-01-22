import WorkTime from "./WorkTime";
import Hour from "./Hour";
import WorkTimeColApproach from './WorkTimeColApproach';

export default class BusinessTimeline{
    format = "en-US"
    calculatedWorkTime = []

    constructor(timezone){
        this.timezone = timezone;
    }

    calculateWorkTime(workTimes, originalTimezone){
        let dates = [];
        workTimes.forEach(workTime => {
            console.log("CONVERTING FROM TIMEZONE " + originalTimezone + "TO TIMEZONE " + this.timezone);
            let start = workTime.startTime;
            let end = workTime.endTime;

            let startDate = new Date(new Date().toLocaleString(this.format, {timeZone: originalTimezone}));
            let endDate = new Date(new Date().toLocaleString(this.format, {timeZone: originalTimezone}));

            startDate.setHours(start.hour, start.min, 0);
            endDate.setHours(end.hour, end.min, 0);

            let lastStart = startDate;
            let lastEnd = endDate;

            startDate = new Date(startDate.toLocaleString(this.format, {timeZone: this.timezone}));
            endDate = new Date(endDate.toLocaleString(this.format, {timeZone: this.timezone}));

            console.log("=====");
            console.log("OLD VS NEW DATA");
            console.log("OLD: ");
            console.log(lastStart);
            console.log(lastEnd);
            

            let startHour = new Hour(startDate.getHours(), startDate.getMinutes());
            let endHour = new Hour(endDate.getHours(), endDate.getMinutes());

            console.log("NEW: ");
            console.log(startHour);
            console.log(endHour);
            console.log("=====");

            dates.push(new WorkTime(startHour, endHour));
        });
        this.calculatedWorkTime = dates;
        return this.calculatedWorkTime;
    }

    getColData(){
        let helper = new WorkTimeColApproach();
        console.log("SENDING DATA TO PROCESS");
        console.log(this.calculatedWorkTime);
        let response =  helper.getTimelinePoints(this.calculatedWorkTime);
        return response;
    }
}