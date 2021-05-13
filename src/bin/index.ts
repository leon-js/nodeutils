// import ui from '@ui'
const shellJs = require('shelljs')
import Git from '@git'
import Inquirer from 'inquirer'
import { promptListAction } from '@const'
import { ExitUtils, LoggerUtils, ShellUtils } from '@utils'

const args: string[] = process.argv.slice(2)

/**
 * 启动
 */
export default (): void => {
  const actionName: string = args[0]
  
  action({actionName})
}

/**
 * 执行方法
 * @param actionName 方法名
 */
function action({actionName}: {actionName: string}): void {
  switch (actionName) {
    case 'cmt':
    case 'commit':
      Git.cmt()
      break
    case 'chck':
    case 'checkout':
      Git.chck()
      break
    case 'ui':
      shellJs.exec('npm run ui')
      // ShellUtils.exec({shellFn: 'npm run ui'})
      break
    case 'exit':
      Exit()
      break
    default:
      Default({actionName})
      break
  }
}

/**
 * 正常退出
 */
function Exit(): void {
  ExitUtils.exit()
}

/**
 * 方法名错误时调用
 * @param actionName 方法名
 */
async function Default({actionName}: {actionName: string}): Promise<void> {
  if (actionName) {
    LoggerUtils.warn(`当前输入的方法 ${actionName} 不存在\n`)
  }

  await Inquirer.prompt(promptListAction).then((r: {actionName: string}) => {
    const { actionName } = r
    
    action({actionName})
  })
}