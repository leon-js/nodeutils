const fs = require('fs')
const path = require('path')
const shell = require('shelljs')
const inquirer = require('inquirer')

interface Props {
  args: Array<number>
}

module.exports = ({args}: Props) => {
  const promptList = [{
    type: 'list',
    message: '选择文件夹',
    name: 'file',
    choices: shell.ls('-d', '*/')
  }]

  inquirer.prompt(promptList).then((res: {file: string}) => {
    shell.cd(res['file'])
    console.log(shell.ls())
  })
}
