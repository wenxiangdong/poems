import { Octokit } from 'octokit';

/**
 * @type {{ current: Octokit }}
 */
const refClient = {
  current: undefined,
}
export const getClient = () => {
  console.log('process.env.GITHUB_TOKEN', process.env.GITHUB_TOKEN);
  if (!refClient.current) {
    refClient.current = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });
  }
  return refClient.current;
}
