import Hour from "./Hour";

export default class WorkTimeColApproach{
    constructor(totalCols = 48){
        this.totalCols = totalCols;
        this.conversionFactor = this.totalCols / 24;
    }

    getTimelinePoints(userWorkTimes){
        this.startPoints = [];
        this.endPoints = [];

        userWorkTimes.forEach(time => {
            let startTime = time.startTime;
            let endTime = time.endTime;

            let startHour =  new Hour(startTime.hour, startTime.min);
            let endHour =  new Hour(endTime.hour, endTime.min);

            let hourPoints = this.calculateHourPoints(startHour.hour);
            let minPoints = this.calculateMinPoints(startHour.min);
            let points = hourPoints + minPoints;

            console.log("START Hour: " + startHour.hour + ":" + startHour.min + " is getting the next points: " + points);

            this.startPoints.push(points);

            hourPoints = this.calculateHourPoints(endHour.hour);
            minPoints = this.calculateMinPoints(endHour.min);
            points = hourPoints + minPoints;

            console.log("END Hour: " + endHour.hour + ":" + endHour.min + " is getting the next points: " + points);

            this.endPoints.push(points);
        });
        return [this.startPoints, this.endPoints];
    }

    calculateHourPoints(hour){
        let hourPoint = hour * this.conversionFactor;
        return hourPoint;
    }

    calculateMinPoints(min){
        let minPoints = (min / 60) * this.conversionFactor;
        return minPoints;
    }
}