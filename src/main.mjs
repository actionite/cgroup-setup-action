import { readInputs } from './inputs.mjs'
import * as core from '@actions/core'

function run() {
  try {
    readInputs()
  } catch (error) {
    core.setFailed(error)
  }
}

run()
