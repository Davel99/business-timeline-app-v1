import './style.css';
import Testing from './testing/testCreations';

window.onload = (event) => {
    console.log("Page is fully loaded");
    console.log("CREATING USERS ... ");
    let user = Testing.createUser();
    console.log(user);
    let userB = Testing.createUserB();
    console.log(userB);
    
    console.log("CREATING TIMELINE...");
    let timelineA = Testing.createTimeline(user);
    console.log(timelineA);
    let timelineB = Testing.createTimeline(userB);
    console.log(timelineB);
    
};

