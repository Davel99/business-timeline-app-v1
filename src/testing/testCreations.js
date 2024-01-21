import UserBuilder from '../JSModules/builders/UserBuilder';

function createUser(){
    let user = false;
    let userBuilder = new UserBuilder()
        .addName("hola")
        .addTimezone("mexico")
        .addSchedule("schedule");
    if (userBuilder.canBuild()) {
        user = userBuilder.buildUser();
    }
    return user;
}

const Testing = {
    createUser
}

export default Testing;