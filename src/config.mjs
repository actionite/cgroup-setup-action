const DEFAULT_VALIDATOR = {
  expectedType: '',
  validatorFn: value => {},
  messageFn: (key, value) => {}
}

const NUM_GT_ZERO_VALIDATOR = {
  expectedType: 'number',
  validatorFn: value => value > 0,
  messageFn: (key, value) => `${key} must be a number greater than 0, but was actually ${value}`
}

const STR_NOT_EMPTY_VALIDATOR = {
  expectedType: 'string',
  validatorFn: value => value.length > 0,
  messageFn: (key, value) => `${key} must be a non-empty string`
}

/**
 * Singleton class for storing configuration data.
 */
export default class Config {
  static #data = {}

  static #get(key) {
    return this.#data[key]
  }

  static #getOrThrow(key) {
    if (!this.#has(key)) {
      throw new Error(`${key} is not set`)
    }

    return this.#get(key)
  }

  static #set(key, value) {
    this.#data[key] = value
  }

  static #setWithValidation(key, value, cfg = DEFAULT_VALIDATOR) {
    if (cfg !== undefined && cfg !== null && cfg.expectedType !== undefined && cfg.expectedType !== null) {
      if (typeof value !== cfg.expectedType) {
        throw new TypeError(`${key} must be a ${cfg.expectedType}`)
      }
    }

    if (cfg && typeof cfg.validatorFn === 'function') {
      if (!cfg.validatorFn(value)) {
        if (typeof cfg.messageFn === 'function') {
          throw new Error(cfg.messageFn(key, value))
        } else {
          throw new Error(`The value of ${key} is invalid`)
        }
      }
    }

    this.#set(key, value)
  }

  static #setOnceWithValidation(key, value, cfg = DEFAULT_VALIDATOR) {
    if (this.#has(key)) {
      throw new Error(`${key} is already set`)
    }

    this.#setWithValidation(key, value, cfg)
  }

  static #has(key) {
    return this.#data[key] !== undefined
  }

  static clear() {
    this.#data = {}
  }

  static get githubToken() {
    return this.#getOrThrow('githubToken')
  }

  static set githubToken(value) {
    this.#setWithValidation('githubToken', value, STR_NOT_EMPTY_VALIDATOR)
  }

  static get cpuCount() {
    return this.#getOrThrow('cpuCount')
  }

  static set cpuCount(value) {
    this.#setOnceWithValidation('cpuCount', value, NUM_GT_ZERO_VALIDATOR)
  }

  static hasCpuCount() {
    return this.#has('cpuCount')
  }

  static get memoryTotal() {
    return this.#getOrThrow('memoryTotal')
  }

  static set memoryTotal(value) {
    this.#setOnceWithValidation('memoryTotal', value, NUM_GT_ZERO_VALIDATOR)
  }

  static hasMemoryTotal() {
    return this.#has('memoryTotal')
  }

  static get groupName() {
    return this.#getOrThrow('groupName')
  }

  static set groupName(value) {
    this.#setWithValidation('groupName', value, STR_NOT_EMPTY_VALIDATOR)
  }

  static hasGroupName() {
    return this.#has('groupName')
  }

  static get cpuShares() {
    return this.#getOrThrow('cpuShares')
  }

  static set cpuShares(value) {
    this.#setWithValidation('cpuShares', value, NUM_GT_ZERO_VALIDATOR)
  }

  static hasCpuShares() {
    return this.#has('cpuShares')
  }

  static get memoryLimit() {
    return this.#getOrThrow('memoryLimit')
  }

  static set memoryLimit(value) {
    this.#setWithValidation('memoryLimit', value, NUM_GT_ZERO_VALIDATOR)
  }

  static hasMemoryLimit() {
    return this.#has('memoryLimit')
  }

  static get memorySwapLimit() {
    return this.#getOrThrow('memorySwapLimit')
  }

  static set memorySwapLimit(value) {
    this.#setWithValidation('memorySwapLimit', value, NUM_GT_ZERO_VALIDATOR)
  }

  static hasMemorySwapLimit() {
    return this.#has('memorySwapLimit')
  }
}
