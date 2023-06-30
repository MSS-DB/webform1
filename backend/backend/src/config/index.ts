import {config} from 'dotenv'

config()

const version = process.env.VERSION || "1.0"

const salt = 10

const API = {
  ITEMS_PER_PAGE: 20,
}

const CODE = {
  CLIENT_ERROR: {
    UNAUTHORIZED: 401,
    BAD_REQUEST: 404,
  },
}

const SUCCESS = {
  MODEL_GET_SUCCESS: (model: string): string => `Successfully get model ${model}`,
}

export {version, API, CODE, SUCCESS, salt}
