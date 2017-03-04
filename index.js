
class Calculator {
  constructor() {
    this.keys = []
  }

  press(key) {

    this.keys.push(key)
    return this
  }

  display() {
    return this.keys.reduce(reducer, "")
  }
}

function reducer(display, key, ) {
  switch (key) {
    case "AC":
      return "0."

    case "=":
      return display

    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9": {
      let [left, right] = display.split(".")

      if (left.length === 10)
        return display

      if (left === "0")
        left = key
      else
        left += key

      return [left, right].join(".")
    }

    default:
      return display
  }
}

module.exports = Calculator
