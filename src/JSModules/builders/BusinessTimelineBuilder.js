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
        this.timezone = t;
        this.user = u;
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
        timeline.calculateWorkTime(user.schedule);
        return timeline;
    }


}