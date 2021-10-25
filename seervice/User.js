// const query = require('../db/queries');
const bcrypt = require('bcryptjs')
const {validateParameter} = require('../commons/util')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory');

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const findById = async (id) => {
    const user = await User.findByPk(id)
    if(!user) {
        throw({message: 'User Not Found', code: 404})
    }
    return user
}

const createUser = async (data) => {
    let {email, password} = data;
    const {isValid, messages} = validateParameter(['email', 'password'], data)
    if(!isValid) {
        throw({message: messages, code: 400})
    }
    const name = email.substring(0, email.indexOf('@'))
    password = await bcrypt.hash(password, 10)
    return await User.create({email, password, name});
}

const login = async (data) => {
    let {email, password} = data;
    const {isValid, messages} = validateParameter(['email, password'], data)
    if(!isValid) {
        throw({message: messages, code: 400})
    }
    const user = await User.findAll({where: {email}});
    if(!user) {
        throw({message: 'User Not Found', code: 404})
    }
    const isMatch = await bcrypt.compare(password, user.id)
    if(!isMatch){
        throw({message: 'invalid credentials', code: 400})
    }
    return user;
}

module.exports = {
    findById,
    createUser,
    login
}