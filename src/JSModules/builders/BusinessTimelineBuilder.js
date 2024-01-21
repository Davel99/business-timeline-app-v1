import BusinessTimeline from "../utility/BusinessTimeline";

export default class BusinessTimelineBuilder{
    timezone;
    user;
    canBuildTimeline = false;

    addTimezone(timezone){
        this.timezone = timezone;
        return this;
    }
    addUser(user){
        this.user = user;
        return this;
    }

    canBuild(){
        let t = this.timezone;
        let u = this.user;
        if(
            (t != null) &&
            (u != null)
        ){
            this.canBuildTimeline = true;
        }
        return this.canBuildTimeline;
    }

    buildTimeline(){
        let timeline = new BusinessTimeline(this.timezone);
        timeline.calculateWorkTime(this.user.schedule);
        return timeline;
    }


}