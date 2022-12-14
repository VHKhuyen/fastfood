const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
class AuthController {

    //route POST auth/register
    async register(req, res) {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({ success: false, message: 'missing username and/or password' });
        }
        try {
            //check for existing user
            const user = await User.findOne({ username })
            if (user)
                return res.status(400).json({ success: false, message: ' username already register taken' })

            const hashPassword = await argon2.hash(password)
            const newUser = new User({ username, password: hashPassword })

            await newUser.save()

            //return token
            const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET)
            res.json({ success: true, message: "user created successfully", accessToken })
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "internal server" })
        }
    }

    //router auth/login
    async login(req, res) {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({ success: false, message: 'missing username and/or password' });
        }
        try {
            //check for existing user
            const user = await User.findOne({ username })
            if (!user) {
                return res.status(400).json({ success: false, message: 'incorrect username or password' });
            }
            //username found
            const passwordValid = await argon2.verify(user.password, password)
            if (!passwordValid) {
                return res.status(400).json({ success: false, message: 'incorrect username or password' });
            }
            //all good
            //return token
            const accessToken = jwt.sign({ userId: user._id, username: user.username }, process.env.ACCESS_TOKEN_SECRET)
            res.json({ success: true, message: "user login successfully", accessToken })
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "internal server" })
        }
    }
}

module.exports = new AuthController();