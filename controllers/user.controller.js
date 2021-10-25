const User = require('../seervice/User')
const {generateAuthToken} = require('../commons/auth')

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        return res.status(200).json({message: 'success', data: user})
    } catch (err) {
        console.error("Unable to get user", err)
        res.status(err.code || 400).json({
            status: 'failed',
            message: err.message,
        });
    }
}

const createUser = async (req, res) => {
    try {
        const user = await User.createUser(req.body)
        const token = generateAuthToken(user.id)
        return res.status(200).json({message: 'success', data: user, token: token});
    } catch (err) {
        console.error("Unable to create user", err)
        res.status(err.code || 400).json({
            status: 'failed',
            message: err.message,
        });
    }
}

const login = async (req, res) => {
    try {
        const user = await User.login(req.body)
        const token = generateAuthToken(user.id)
        return res.status(200).json({message: 'success', data: user, token: token});
    } catch (err) {
        console.error("Unable to login", err)
        res.status(err.code || 400).json({
            status: 'failed',
            message: err.message,
        });
    }
}

module.exports = {
    getUser,
    createUser,
    login
}