import './style.css';
import Testing from './testing/testCreations';

window.onload = (event) => {
    console.log("Page is fully loaded");
    let user = Testing.createUser();
    console.log(user);
    let timeline = Testing.createTimeline(user);
    console.log(timeline);
};

