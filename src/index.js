import './style.css';
import UserBuilder from './JSModules/builders/UserBuilder';

window.onload = (event) => {
    console.log("Page is fully loaded");
    let userBuilder = new UserBuilder()
        .addName("hola")
        .addTimezone("mexico")
        .addSchedule("schedule");
    let readytoBuild = userBuilder.canBuild();
    let user = false;
    if(readytoBuild) {
        user = userBuilder.buildUser();
    }

    console.log(user);
};