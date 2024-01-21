export default class BusinessTimelineHandler{
    constructor(){
        this.users = [];
        this.timelines = [];
    }

    addUser(user){
        this.users.push(user);
        return true;
    }

    addTimeline(timeline){
        this.timelines.push(timeline);
        return true;
    }

    getTimelineAsColData(){
        this.colPoints = [];
        this.timelines.forEach(timeline => {
            let points = timeline.getColData();
            this.colPoints.push(points);
        })
        return this.colPoints;        
    }
    
}