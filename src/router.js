const express = require('express')
const PageController = require('./controllers/PageController')
const InterestController = require('./controllers/InterestController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const interestController = new InterestController()

// Routes
router.get('/', interestController.renderInterestForm)
router.post('/', interestController.renderInterestCalculate)
router.get('*', pageController.renderNotFound)

module.exports = router
