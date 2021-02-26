import shell from 'shelljs'
import inquirer from 'inquirer'
import LoggerUtils from '@utils/logger'

/**
 * 入参
 * @param args 进程被启动时传入的命令行参数（已截取前两位）
 */
interface Props {
  args: Array<string>
}

const regex: RegExp = /^\/[A-Za-z0-9]/

module.exports = async ({args}: Props) => {
  if (regex.test(args[0])) {
    if (shell.cd(args[0]).code !== 0) {
      LoggerUtils.error('地址输入错误，指向当前目录')
    }
  }
  
  const promptList = [{
    type: 'list',
    name: 'file',
    message: '请选择文件夹',
    choices: shell.ls('-d', '*/')
  }, {
    type: 'input',
    name: 'msg',
    message: '请输入提交内容'
  }]

  await inquirer.prompt(promptList).then((res: {file: string, msg: string}) => {
    const { file, msg } = res
    shell.cd(file)
    LoggerUtils.succ(JSON.stringify(res))
  })
}
