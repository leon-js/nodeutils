import inquirer from 'inquirer'
import { 
  ExitUtils,
  ShellUtils,
  LoggerUtils,
  ProgressUtils
} from '@utils'

/**
 * 切换分支
 */
export default async () => {
  const promptList: Prompt[] = [{
    type: 'list',
    name: 'type',
    message: '请选择分支位置',
    choices: [
      {
        key: 'local',
        value: 'local',
        name: '本地',
      },
      {
        key: 'online',
        value: 'online',
        name: '远程',
      }
    ]
  }]
  const { type }: {type: string} = await inquirer.prompt(promptList)
  const stepAry: string[] = ['git fetch', `git branch${type === 'local' ? '' : ' -r'}`]

  LoggerUtils.succ(`${JSON.stringify({type})}`)

  let branchs: string = ''

  await ProgressUtils.start(stepAry.map((i, index) => () => ShellUtils.exec({shellFn: i, options: {silent: true}}).then(r => {
    if (index && typeof r === 'string') {
      branchs = r
    }
  })))

  if (!branchs.length) {
    ExitUtils.exitError({errorMsg: `错误信息：拉取分支返回数据有误, 没有获取到分支信息`})
  }

  const promptListBranch: Prompt[] = [{
    type: 'list',
    name: 'branch',
    message: '请选择需要切换的分支',
    choices: branchs.split('\n').filter((i: string) => {
      return !i.includes('->') && i.trim().length
    })
  }]
  const { branch }: {branch: string} = await inquirer.prompt(promptListBranch)

  ProgressUtils.start([
    () => ShellUtils.exec({shellFn: `git checkout ${branch.replace(/origin\//, '')}`, options: {silent: true}})
  ])
}
