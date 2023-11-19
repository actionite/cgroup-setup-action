import { firstDefinedValue } from '../src/utils.mjs'
import { expect } from 'expect'

describe('Utils', () => {
  describe('firstDefinedValue', () => {
    it('should return the first defined value', () => {
      expect(firstDefinedValue(null, undefined, 'abc')).toEqual('abc')
      expect(firstDefinedValue(null, 'abc', undefined, 'bca', '')).toEqual('abc')
    })

    it('should throw if no defined value is found', () => {
      expect(() => firstDefinedValue(null, undefined)).toThrow(Error)
    })

    it('should throw if values is empty', () => {
      expect(() => firstDefinedValue()).toThrow(TypeError)
    })
  })
})
