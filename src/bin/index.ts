import commit from '../commit'
import inquirer from 'inquirer'
import { LoggerUtils } from '@utils'
import { promptListAction } from '@const'

const args: string[] = process.argv.slice(2)

export default () => {
  
  const actionName: string = args[0]
  
  action({actionName})
}

async function action({actionName}: {actionName: string}) {
  switch (actionName) {
    case 'cmt':
      commit({args: args.slice(1)})
      break
    default:
      LoggerUtils.warn(`
        请输入需要执行（正确）的方法名

        cmt: git提交

        其余功能正在持续开发中...
      `)
      await inquirer.prompt(promptListAction).then((res: {actionName: string}) => {
        const { actionName } = res
        
        action({actionName})
      })
      break
  }
}
