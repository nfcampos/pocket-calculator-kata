const Calculator = require('.')

describe('Calculator', () => {
  it('Pocket Calculator', () => {
    const calculator = new Calculator()
      .press('AC')

    expect(calculator.display()).toBe("0.")
  })

  it('Entering Integers', () => {
    const zero = new Calculator()
      .press('AC')
      .press("0")

    expect(zero.display()).toBe("0.")

    const calculator = new Calculator()
      .press('AC')
      .press('1')

    expect(calculator.display()).toBe("1.")

    calculator.press("2")

    expect(calculator.display()).toBe("12.")

    calculator
      .press("3")
      .press("4")
      .press("5")
      .press("6")
      .press("7")
      .press("8")
      .press("9")
      .press("0")

    expect(calculator.display()).toBe("1234567890.")


    calculator.press("1")

    expect(calculator.display()).toBe("1234567890.")

    const equals = new Calculator()
      .press('AC')
      .press("1")
      .press("2")
      .press("3")
      .press("=")
      .press("4")

    expect(equals.display()).toBe("4.")
  })
})
