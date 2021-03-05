import inquirer from 'inquirer'
import { LoggerUtils, ErrorTrapUtils } from '@utils'

export default async () => {
  const promptList: Prompt[] = [{
    type: 'input',
    name: 'msg',
    message: '请输入提交内容'
  }]

  await inquirer.prompt(promptList).then((r: {msg: string}): void => {
    const { msg } = r

    LoggerUtils.succ(`${JSON.stringify(r)}\n`)

    const stepAry: string[] = ['git add .', `git commit -m '${msg}'`, 'git push']
    
    // silent 为 true，shelljs不再输出错误信息
    stepAry.forEach(i => {
      ErrorTrapUtils.shellExec({shellFn: i, options: {silent: true}})
    })
  })
}

function start() {

}