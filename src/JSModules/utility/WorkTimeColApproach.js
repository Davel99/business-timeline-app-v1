export default class WorkTimeColApproach{
    constructor(totalCols = 48){
        this.totalCols = totalCols;
    }

    getTimelinePoints(userWorkTime){
        this.startPoints = [];
        this.endPoints = [];
        return [this.startPoints, this.endPoints];
    }
}