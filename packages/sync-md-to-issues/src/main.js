import * as core from '@actions/core'
import { wait } from './wait.js'
import fs from 'fs'
import { getClient } from './github-client.js'

const OWNER = 'wenxiangdong'
const REPO = 'poems'

/**
 * The main function for the action.
 *
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run() {
  try {
    // 读取md内容
    const pathToFile = core.getInput('path')
    const file = fs.readFileSync(pathToFile, { encoding: 'utf-8' })
    const fileContent = file.toString()
    // 拆分成一篇篇
    const reg = /#\s(.*?)\n([^#]*)/gs
    const list = []
    let res = reg.exec(fileContent)
    while (res) {
      list.push({ title: res[1], content: res[2] })
      res = reg.exec(fileContent)
    }
    // 发issue
    const client = getClient()
    for (const item of list) {
      const { title, content } = item
      const issueRes = await client.rest.issues.create({
        owner: OWNER,
        repo: REPO,
        title,
        body: content
      })
      console.log(issueRes)
    }
  } catch (error) {
    console.error(error)
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
