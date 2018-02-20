const fs = require('fs')

fs.stat('./stat.js', (err, stats) => {
  if (err) throw err

  console.log(stats.isFile())
  console.log(stats.isDirectory())
  console.log(stats)
})


/* Stats {
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 16026978,
  size: 175,
  blocks: 8,
  atimeMs: 1519114679000,
  mtimeMs: 1519114671000,
  ctimeMs: 1519114671000,
  birthtimeMs: 1519114593000,
  atime: 2018-02-20T08:17:59.000Z,
  mtime: 2018-02-20T08:17:51.000Z,
  ctime: 2018-02-20T08:17:51.000Z,
  birthtime: 2018-02-20T08:16:33.000Z } */