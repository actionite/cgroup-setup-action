import Config from '../src/config.mjs'
import { expect } from 'expect'

describe('Config', () => {
  describe('githubToken', () => {
    it('should throw if value is not set', () => {
      expect(() => Config.githubToken).toThrow(Error)
    })

    it('should throw if value is not a string', () => {
      expect(() => (Config.githubToken = 123)).toThrow(TypeError)
    })

    it('should throw if value is an empty string', () => {
      expect(() => (Config.githubToken = '')).toThrow(Error)
    })

    it('should set the value', () => {
      Config.githubToken = 'abc123'
      expect(Config.githubToken).toEqual('abc123')
      Config.clear()
    })
  })

  describe('cpuCores', () => {
    it('should throw if value is not set', () => {
      expect(() => Config.cpuCount).toThrow(Error)
    })

    it('should throw if value is not a number', () => {
      expect(() => (Config.cpuCount = 'abc')).toThrow(TypeError)
    })

    it('should throw if value is not greater than 0', () => {
      expect(() => (Config.cpuCount = 0)).toThrow(Error)
      expect(() => (Config.cpuCount = -1)).toThrow(Error)
    })

    it('should throw if the value is already set', () => {
      Config.cpuCount = 10
      expect(() => (Config.cpuCount = 10)).toThrow(Error)
      Config.clear()
    })

    it('should set the value', () => {
      Config.cpuCount = 10
      expect(Config.cpuCount).toEqual(10)
      Config.clear()
    })
  })

  describe('memoryTotal', () => {
    it('should throw if value is not set', () => {
      expect(() => Config.memoryTotal).toThrow(Error)
    })

    it('should throw if value is not a number', () => {
      expect(() => (Config.memoryTotal = 'abc')).toThrow(TypeError)
    })

    it('should throw if value is not greater than 0', () => {
      expect(() => (Config.memoryTotal = 0)).toThrow(Error)
      expect(() => (Config.memoryTotal = -1)).toThrow(Error)
    })

    it('should throw if the value is already set', () => {
      Config.memoryTotal = 10
      expect(() => (Config.memoryTotal = 10)).toThrow(Error)
      Config.clear()
    })

    it('should set the value', () => {
      Config.memoryTotal = 100000
      expect(Config.memoryTotal).toEqual(100000)
      Config.clear()
    })
  })

  describe('groupName', () => {
    it('has should return false if value is not set', () => {
      expect(Config.hasGroupName()).toEqual(false)
    })

    it('has should return true if value is set', () => {
      Config.groupName = 'abc123'
      expect(Config.hasGroupName()).toEqual(true)
      Config.clear()
    })

    it('should throw if value is not set', () => {
      expect(() => Config.groupName).toThrow(Error)
    })

    it('should throw if value is not a string', () => {
      expect(() => (Config.groupName = 123)).toThrow(TypeError)
    })

    it('should throw if value is an empty string', () => {
      expect(() => (Config.groupName = '')).toThrow(Error)
    })

    it('should set the value', () => {
      Config.groupName = 'abc123'
      expect(Config.groupName).toEqual('abc123')
      Config.clear()
    })
  })

  describe('cpuShares', () => {
    it('has should return false if value is not set', () => {
      expect(Config.hasCpuShares()).toEqual(false)
    })

    it('has should return true if value is set', () => {
      Config.cpuShares = 1000
      expect(Config.hasCpuShares()).toEqual(true)
      Config.clear()
    })

    it('should throw if value is not set', () => {
      expect(() => Config.cpuShares).toThrow(Error)
    })

    it('should throw if value is not a number', () => {
      expect(() => (Config.cpuShares = 'abc')).toThrow(TypeError)
    })

    it('should throw if value is not greater than 0', () => {
      expect(() => (Config.cpuShares = 0)).toThrow(Error)
      expect(() => (Config.cpuShares = -1)).toThrow(Error)
    })

    it('should not throw if the value is already set', () => {
      Config.cpuShares = 1000
      expect(() => (Config.cpuShares = 10)).not.toThrow(Error)
      expect(Config.cpuShares).toEqual(10)
      Config.clear()
    })
  })

  describe('memoryLimit', () => {
    it('has should return false if value is not set', () => {
      expect(Config.hasMemoryLimit()).toEqual(false)
    })

    it('has should return true if value is set', () => {
      Config.memoryLimit = 1000
      expect(Config.hasMemoryLimit()).toEqual(true)
      Config.clear()
    })

    it('should throw if value is not set', () => {
      expect(() => Config.memoryLimit).toThrow(Error)
    })

    it('should throw if value is not a number', () => {
      expect(() => (Config.memoryLimit = 'abc')).toThrow(TypeError)
    })

    it('should throw if value is not greater than 0', () => {
      expect(() => (Config.memoryLimit = 0)).toThrow(Error)
      expect(() => (Config.memoryLimit = -1)).toThrow(Error)
    })

    it('should not throw if the value is already set', () => {
      Config.memoryLimit = 1000
      expect(() => (Config.memoryLimit = 10)).not.toThrow(Error)
      expect(Config.memoryLimit).toEqual(10)
      Config.clear()
    })
  })

  describe('memorySwapLimit', () => {
    it('has should return false if value is not set', () => {
      expect(Config.hasMemorySwapLimit()).toEqual(false)
    })

    it('has should return true if value is set', () => {
      Config.memorySwapLimit = 1000
      expect(Config.hasMemorySwapLimit()).toEqual(true)
      Config.clear()
    })

    it('should throw if value is not set', () => {
      expect(() => Config.memorySwapLimit).toThrow(Error)
    })

    it('should throw if value is not a number', () => {
      expect(() => (Config.memorySwapLimit = 'abc')).toThrow(TypeError)
    })

    it('should throw if value is not greater than 0', () => {
      expect(() => (Config.memorySwapLimit = 0)).toThrow(Error)
      expect(() => (Config.memorySwapLimit = -1)).toThrow(Error)
    })

    it('should not throw if the value is already set', () => {
      Config.memorySwapLimit = 1000
      expect(() => (Config.memorySwapLimit = 10)).not.toThrow(Error)
      expect(Config.memorySwapLimit).toEqual(10)
      Config.clear()
    })
  })
})
