const { encrypt, decrypt } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
class UserController {
    static login (req, res, err) {
        const { email, password } = req.body
        console.log(req.body)
        const user = {
            email: 'test@mail.com',
            password: encrypt('12345678')
        }

        if (req.body) {
            if (email === user.email) {
                if (email === user.email && decrypt(password, user.password)) {
                    const payload = { email }
                    const token = generateToken(payload)
                    res.status(200).json({
                        ...payload,
                        token
                    })
                } else {
                    res.status(401).json({
                        errors: [{ message: 'Invalid Email/Password' }]
                    })
                }
            } else {
                res.status(401).json({
                    errors: [{ message: 'Invalid Email/Password' }]
                })
            }
        }
    }
}

module.exports = UserController