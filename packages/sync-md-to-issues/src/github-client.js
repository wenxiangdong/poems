import { Octokit } from 'octokit'
export const getClient = () => {
  console.log('process.env.GITHUB_TOKEN', process.env.GITHUB_TOKEN)
  return new Octokit({
    auth: process.env.GITHUB_TOKEN
  })
}
