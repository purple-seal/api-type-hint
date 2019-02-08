const { getListStarredGist } = require('./github')

async function main () {
  const starredGistList = await getListStarredGist()

  const ownerIds = starredGistList.map((starredGist) => {
    return starredGist.owner.id
  })

  console.log(ownerIds)
}