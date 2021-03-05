import ShellJs from 'shelljs'
import ExitUtils from './exit'

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

function shellExec({shellFn, errorMsg, options = {}}: Props) {
  ShellJs.exec(shellFn, options)

  const error = ShellJs.error()

  if (error) {
    ExitUtils.exitError({errorMsg: `错误信息：${errorMsg || error}`})
  }
}

export default {
  shellExec
}
