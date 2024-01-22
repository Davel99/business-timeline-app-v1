import UserBuilder from '../JSModules/builders/UserBuilder';
import BusinessTimelineBuilder from '../JSModules/builders/BusinessTimelineBuilder';
import BusinessTimelineHandler from '../JSModules/BusinessTimelineHandler';
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

function createUserB(){
    let user = false;
    let workTimes = [];
    // let hourA = new Hour(10,30);
    // let hourB = new Hour(22,0);
    let hourA = new Hour(5,30);
    let hourB = new Hour(10,30);
    let workTime = new WorkTime(hourA, hourB);

    workTimes.push(workTime);

    let timezoneA = "Asia/Colombo";
    let timezoneB = "Indian/Chagos";
    let timezoneC = "America/Thule";

    let userBuilder = new UserBuilder()
        .addName("MemberB")
        .addTimezone(timezoneA)
        .addSchedule(workTimes);
    if (userBuilder.canBuild()) {
        user = userBuilder.buildUser();
    }
    return user;

}

function createTimeline(user){
    let timezoneA = "America/Denver";
    let timezone = "America/Mexico_City";
    let timeline = false;
    let builder = new BusinessTimelineBuilder()
        .addTimezone(timezoneA)
        .addUser(user);
    if(builder.canBuild()) timeline = builder.buildTimeline();

    return timeline;
}

function handleTimelines(userArray, timelineArray){
    let handler = new BusinessTimelineHandler();
    userArray.forEach(user => {
        handler.addUser(user);        
    });
    timelineArray.forEach(timeline => {
        handler.addTimeline(timeline);
    })
    return handler;
}

const Testing = {
    createUser,
    createUserB,
    createTimeline,
    handleTimelines
}

export default Testing;