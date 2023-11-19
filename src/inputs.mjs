import Config from './config.mjs'
import * as core from '@actions/core'
import * as os from 'os'
import * as hf from 'human-format'

export function readInputs() {
  Config.githubToken = core.getInput('token', { required: true })
  Config.groupName = core.getInput('name', { required: true })

  const inputCpuShares = core.getInput('cpu_shares')
  const inMemLimit = core.getInput('memory_limit')
  const inMemSwapLimit = core.getInput('memory_swap_limit')

  if (!Config.hasCpuCount()) {
    Config.cpuCount = os.cpus().length
  }

  if (!Config.hasMemoryTotal()) {
    Config.memoryTotal = os.totalmem()
  }
}
