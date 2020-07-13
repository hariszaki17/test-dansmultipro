const router = require('express').Router()
const JobController = require('../controllers/JobController')
const UserController = require('../controllers/UserController')

router.get('/positions', JobController.queryPositions)
router.get('/positions/:id', JobController.queryPositionsById)
router.post('/login', UserController.login)

module.exports = router