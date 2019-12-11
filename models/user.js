module.exports = (seq, datatype) => {
    const user = seq.define('user', {
        name : {
            type : datatype.STRING(255),
            allowNull : false
        },
        email : {
            type : datatype.STRING(63),
            allowNull : false
        },
        password : {
            type : datatype.STRING(63),
            allowNull : false
        },
        gender : {
            type : datatype.BOOLEAN,
            allowNull : false
        },
        age : {
            type : datatype.DECIMAL(3),
            allowNull : false
        },
        userID : {
            type : datatype.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        }
    }, {
        tableName : 'user',
        freezeTableName : false,
        timestamps : false
    });

    return user;
}