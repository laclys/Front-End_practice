/**
  argv
  argv0
  execArgv
  exePath
 */

 const {argv, argv0, execArgv, execPath} = process
// argv node安装的路径；执行文件的路径；传入的一些自定义参数
 argv.forEach(element => {
   console.log(element)
 })

 console.log(argv0)

 console.log(execArgv) // 调用node所传入的一些特殊参数 eg: --inspect

 console.log(execPath) // 调用脚本的路径