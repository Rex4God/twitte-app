const dbConn = require('../db/connect')

const findById = async (id, table) => {
    let status = false;
    const resource = await dbConn.query(`select * from ${table} where insertId=${id}`)
    if(resource) {
        status = true;
        return {status: status, data: resource}
    }
    return {status: status, data: `${table} not found with id ${id}`}
}

const create = async (data, table) => {
    let status = false;
    const resource = await dbConn.query(`insert into ${table} set ?`, data, function (error, results, fields) {
        if (error) {
            throw({message: error.message, code: 400});
        }
        status = true;
        return data;
    });
    return {status: status, data: resource}
}

const login = async (email) => {
    let status = false;
    const resource = await dbConn.query(`select * from user where email=${email}`)
    if(resource) {
        status = true;
        return {status: status, data: resource}
    }
    return {status: status, data: `user not found with email ${email}`}
}

module.exports = {
    findById,
    create,
    login
}