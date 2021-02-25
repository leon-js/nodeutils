const fs = require('fs')
const path = require('path')
const shell = require('shelljs')
const inquirer = require('inquirer')

/**
 * 入参
 * @param args 进程被启动时传入的命令行参数（已截取前两位）
 */
interface Props {
  args: Array<string>
}

const regex: RegExp = /^\/[A-Za-z0-9]/

module.exports = ({args}: Props) => {
  if (regex.test(args[0])) {
    if (shell.cd(args[0]).code !== 0) {
      shell.echo('Info: 地址输入错误，将指向当前目录')
    }
  }
  
  const promptList = [{
    type: 'list',
    name: 'file',
    message: '请选择文件夹',
    choices: shell.ls('-d', '*/')
  }]

  inquirer.prompt(promptList).then((res: {file: string}) => {
    const { file } = res
    shell.cd(file)
  })
}
