let userData;

setData = (user) => {
    userData = user.dataValues;
    console.log("in userData.js : ", userData);
}

module.exports = {
    setData : setData,
    data : userData
}