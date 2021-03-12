import inquirer from 'inquirer'
import { LoggerUtils, ShellUtils, ProgressUtils } from '@utils'

/**
 * 提交代码
 */
export default async () => {
  const promptList: Prompt[] = [{
    type: 'input',
    name: 'msg',
    message: '请输入提交内容'
  }]

  await inquirer.prompt(promptList).then((r: {msg: string}): void => {
    const { msg } = r
    const stepAry: string[] = ['git add .', `git commit -m '${msg}'`, 'git push']

    LoggerUtils.succ(`${JSON.stringify(r)}`)

    ProgressUtils.start(stepAry.map(i => () => ShellUtils.exec({shellFn: i, options: {silent: true}})))
  })
}
