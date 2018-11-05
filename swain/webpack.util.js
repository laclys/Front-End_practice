var glob = require("glob")
var path = require('path')

function getEntry () {
  let globPath = './templates/*.html'
  let files = glob.sync(globPath)
  console.log(files)
  let dirname, entries = []
  for (let i = 0; i < files.length; i++) {
    dirname = path.dirname(files[i]) + '/'
    entries.push(files[i].split(dirname)[1].split('.')[0])
  }
  return entries
}

module.exports = {
  getEntry: getEntry
}