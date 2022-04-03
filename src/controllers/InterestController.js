class InterestController {
  constructor () {
    this.renderInterestCalculate = this.renderInterestCalculate.bind(this)
  }

  getInterestCalculate (amount, interestRate, numberYears) {
    // Caclulo interes
    return amount * (interestRate / 100) * numberYears
  }

  renderInterestForm (req, res) {
    res.render('Interest-form')
  }

  renderInterestCalculate (req, res) {
    const amount = parseInt(req.body.amount)
    const interestRate = parseInt(req.body.interestRate)
    const numberYears = parseInt(req.body.numberYears)
    res.render('interest-total', {
      amount,
      totalInterest: this.getInterestCalculate(amount, interestRate, numberYears),
      interestRate,
      numberYears
    })
  }
}

module.exports = InterestController
