import UserBuilder from '../JSModules/builders/UserBuilder';
import BusinessTimelineBuilder from '../JSModules/builders/BusinessTimelineBuilder';
import WorkTime from '../JSModules/utility/WorkTime';
import Hour from '../JSModules/utility/Hour';

function createUser(){
    let user = false;
    let workTimes = [];
    let hourA = new Hour(5,30);
    let hourB = new Hour(10,30);
    let workTime = new WorkTime(hourA, hourB);

    workTimes.push(workTime);

    let userBuilder = new UserBuilder()
        .addName("MemberA")
        .addTimezone("America/Mexico_City")
        .addSchedule(workTimes);
    if (userBuilder.canBuild()) {
        user = userBuilder.buildUser();
    }
    return user;
}

function createTimeline(user){
    let timeline = false;
    let builder = new BusinessTimelineBuilder()
        .addTimezone("America/Chicago")
        .addUser(user);
    if(builder.canBuild()) timeline = builder.buildTimeline();

    return timeline;
}

const Testing = {
    createUser,
    createTimeline
}

export default Testing;