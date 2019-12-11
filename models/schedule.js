module.exports = (seq, datatype) => {
    const schedule = seq.define('schedule', {
        scheduleID : {
            type : datatype.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        title : {
            type : datatype.STRING(255),
            allowNull : false
        }
    }, {
        tableName : 'schedule',
        freezeTableName : false,
        timestamps : true
    });

    return schedule;
}