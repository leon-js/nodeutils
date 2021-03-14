import Git from '@git'
import Inquirer from 'inquirer'
import { promptListAction } from '@const'
import { ExitUtils, LoggerUtils } from '@utils'

const args: string[] = process.argv.slice(2)

/**
 * 启动
 */
export default () => {
  const actionName: string = args[0]
  
  action({actionName})
}

/**
 * 执行方法
 * @param actionName 方法名
 */
function action({actionName}: {actionName: string}) {
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
      console.log('开启ui界面')
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
function Exit() {
  ExitUtils.exit()
}

/**
 * 方法名错误时调用
 * @param actionName 方法名
 */
async function Default({actionName}: {actionName: string}) {
  if (actionName) {
    LoggerUtils.warn(`当前输入的方法 ${actionName} 不存在\n`)
  }

  await Inquirer.prompt(promptListAction).then((r: {actionName: string}) => {
    const { actionName } = r
    
    action({actionName})
  })
}