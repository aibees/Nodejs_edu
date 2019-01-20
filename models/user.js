module.exports = (seq, datatype) => {
    const user = seq.define('user', {
        nickname : {
            type : datatype.STRING(255),
            allowNull : false,
            primaryKey : true
        },
        ID : {
            type : datatype.STRING(63),
            allowNull : false
        },
        password : {
            type : datatype.STRING(63),
            allowNull : false
        },
        email : {
            type : datatype.STRING(255),
            primaryKey : true
        }
    }, {
        tableName : 'users',
        freezeTableName : false,
        timestamps : true
    });

    return user;
}