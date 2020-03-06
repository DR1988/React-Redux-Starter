export default class Validator<T extends string, U extends { [key: string]: any }> {
  types: {
    [key: string]: {
      validate: (value: any) => boolean,
      instructions: string
    }
  }
  messages: string[]
  config: U

  constructor(config: U) {
    this.config = config
  }

  validate(data: U) {
    let msg
    let type
    let checker
    let isResultOK
    this.messages = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        type = this.config[key]
        if (!type) {
          continue
        }
        checker = this.types[type]
        if (!checker) {
          throw {
            name: "ValidationError",
            message: "No handler to validate type" + type
          };
        }
        isResultOK = checker.validate(data[key])
        if (isResultOK) {
          msg = checker.instructions
          this.messages.push(msg)
        }
      }
    }
    return this.hasErrors();
  }
  hasErrors() {
    return this.messages.length !== 0
  }
}

const vd = new Validator({  first_name: 'isNonEmpty',  age: 'isNumber' })
vd.validate({ first_name: '1', age: '2'})