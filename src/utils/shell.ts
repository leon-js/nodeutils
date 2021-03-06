import ShellJs from 'shelljs'
import ExitUtils from './exit'
import ProgressUtils from './progress'

/**
 * 执行脚本配置项
 * @param shellFn 脚本
 * @param errorMsg 错误提示
 * @param options ShellJs.exec options配置项
 */
interface Props {
  shellFn: string
  errorMsg?: string
  options?: ShellJs.ExecOptions | {}
}

/**
 * 执行脚本
 * @param shellFn 脚本内容
 * @param errorMsg 错误信息
 * @param options shell配置项（silent为true，不再输出错误信息）
 */
const exec = async ({shellFn, errorMsg, options = {}}: Props) => {
  await ProgressUtils.load(() => {
    return new Promise((resolve) => {
      ShellJs.exec(shellFn, options, (code, stdout, stderr) => {
        if (code) {
          ExitUtils.exitError({errorMsg: `错误信息：${errorMsg || stderr}`})
        } else {
          resolve(1)
        }
      })
    })
  }, shellFn)
}

/**
 * 退出
 */
function exit() {
  ShellJs.exit(1)
}

export default {
  exec,
  exit
}

