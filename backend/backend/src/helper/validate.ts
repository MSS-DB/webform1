interface Validator {
  validator: (value: string, ...args: any) => boolean
  message: string
}

const validators: { [key: string]: Validator } = {
  required: {
    validator: (value) => (value.length !== 0),
    message: '*Please enter %ITEM%',
  },
  minLength: {
    validator: (value, length: number) => (value.length > (length - 1)),
    message: '*%ITEM% must be at least %RULE% characters',
  },
  maxLength: {
    validator: (value, length: number) => (value.length < (length + 1)),
    message: '*%ITEM% cannot exceed %RULE% characters',
  },
  name: {
    validator: (value) => !!value.match(/^[A-Za-z| ]*$/),
    message: '*%ITEM% must contain valid characters',
  },
  passport: {
    validator: (value) => !!value.match(/^[a-zA-Z0-9]{6,13}$/),
    message: '*Please enter valid passport number',
  },
  pf: {
    validator: (value) => !!value.match(/^[0-9]{12}$/),
    message: '*Please enter valid IC number',
  },
  phone: {
    validator: (value) => !!value.match(/^01[0-9]{8,9}$/),
    message: '*Please enter valid contact number',
  },
  email: {
    validator: (value) => !!value.match(/^(|N\/A|([A-Za-z0-9._-])+@([a-z0-9])+(\.com)?(\.[a-z]{2})?)$/),
    message: '*Please enter a valid email',
  },
  regex: {
    validator: (value, regex: RegExp) => !!value.match(regex),
    message: "Data doesn't match rule"
  }
}


const isEmail = (email: string): boolean => {
  return validators.email.validator(email)
}

export default {isEmail}
