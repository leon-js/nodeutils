import ShellJs from 'shelljs'
import ExitUtils from './exit'
import ProgressUtils from './progress'

/**
 * 执行脚本配置项
 * @param cb 执行成功的回调
 * @param shellFn 脚本内容
 * @param errorMsg 错误信息
 * @param estimate 估计所需的时间
 * @param options shell配置项（silent为true，不再输出错误信息）
 */
interface Props {
  cb?: Function
  shellFn: string
  estimate?: number
  errorMsg?: string
  options?: ShellJs.ExecOptions | {}
}

/**
 * 执行脚本
 */
const exec = async ({shellFn, errorMsg, options = {}, cb, estimate = 1000}: Props) => {
  return new Promise((resolve) => {
    ProgressUtils.load(() => {
      return new Promise((resolve) => {
        ShellJs.exec(shellFn, options, (code, stdout, stderr) => {
          if (code) {
            ExitUtils.exitError({errorMsg: `错误信息：${errorMsg || stderr}`})
          } else {
            resolve(stdout)
          }
        })
      })
    }, shellFn, estimate).then((r: any) => {
      resolve(r)
    })
  })
  // await ProgressUtils.load(() => {
  //   return new Promise((resolve) => {
  //     ShellJs.exec(shellFn, options, (code, stdout, stderr) => {
  //       if (code) {
  //         ExitUtils.exitError({errorMsg: `错误信息：${errorMsg || stderr}`})
  //       } else {
  //         resolve(1)
  //       }
  //     })
  //   })
  // }, shellFn)
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

