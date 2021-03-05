import Commit from '../commit'
import Inquirer from 'inquirer'
import { promptListAction } from '@const'
import { ExitUtils, LoggerUtils } from '@utils'

const args: string[] = process.argv.slice(2)

export default () => {
  const actionName: string = args[0]
  
  action({actionName})
}

function action({actionName}: {actionName: string}) {
  switch (actionName) {
    case 'cmt':
      Commit()
      break
    case 'exit':
      Exit()
      break
    default:
      Default({actionName})
      break
  }
}

function Exit() {
  ExitUtils.exit()
}

async function Default({actionName}: {actionName: string}) {
  if (actionName) {
    LoggerUtils.warn(`当前输入的方法 ${actionName} 不存在\n`)
  }

  await Inquirer.prompt(promptListAction).then((r: {actionName: string}) => {
    const { actionName } = r
    
    action({actionName})
  })
}