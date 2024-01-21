import User from "../utility/User";

export default class UserBuilder {
    name;
    timezone;
    schedule;
    ready = false;

    addName(name) {
        this.name = name;
        return this;
    }
    addTimezone(timezone) {
        this.timezone = timezone;
        return this;
    }
    addSchedule(schedule) {
        this.schedule = schedule;
        return this;
    }

    canBuild() {
        if (
            this.name != null &&
            this.timezone != null &&
            this.schedule != null
        ) {
            this.ready = true;
        }
        return this.ready;
    }

    buildUser(){
        if(this.ready) return new User(this.name, this.timezone, this.schedule);
        return false;
    }
}