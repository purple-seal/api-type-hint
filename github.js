const axios = require('axios')

/** @return {Promise<import('./__types__/ListStarredGistResponse').ListStarredGistResponse>} */
async function getListStarredGist () {
  const resp = await axios.get('https://api.github.com/gists/starred?access_token=OAUTH-TOKEN')
  return resp.data
}

module.exports = {
  getListStarredGist
}
