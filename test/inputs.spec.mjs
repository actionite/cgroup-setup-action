import Config from '../src/config.mjs'
import { readInputs } from '../src/inputs.mjs'
import { expect } from 'expect'
import * as os from 'os'

describe('Inputs', () => {
  describe('readInputs', () => {
    before(() => {
      process.env['INPUT_NAME'] = 'test-group'
    })

    it('should throw if token is not set', () => {
      expect(() => readInputs()).toThrow(Error)
    })

    it('should not throw if token is set', () => {
      process.env['INPUT_TOKEN'] = 'abc123'
      expect(() => readInputs()).not.toThrow(Error)
    })

    it('cpu count should be greater than 0', () => {
      readInputs()
      expect(Config.cpuCount).toBeGreaterThan(0)
    })

    it('cpu count should be equal to os.cpus().length', () => {
      readInputs()
      expect(Config.cpuCount).toEqual(os.cpus().length)
    })

    it('memory total should be greater than 0', () => {
      readInputs()
      expect(Config.memoryTotal).toBeGreaterThan(0)
    })

    it('memory total should be equal to os.totalmem()', () => {
      readInputs()
      expect(Config.memoryTotal).toEqual(os.totalmem())
    })
  })
})
