import ShellJs from 'shelljs'
import { contact } from '@const'
import LoggerUtils from './logger'

const closingWord: string = `作者联系方式：${contact.email}`

/**
 * 正常退出
 */
function exit(): void {
  LoggerUtils.info(['执行完毕，感谢使用', closingWord])

  ShellJs.exit(1)
}

/**
 * 异常退出
 */
function exitError(props?: {errorMsg: string}): void {
  LoggerUtils.error([props?.errorMsg || '不好意思，出现了错误，请联系开发者', closingWord])
  
  ShellJs.exit(1)
}

export default {
  exit,
  exitError
}