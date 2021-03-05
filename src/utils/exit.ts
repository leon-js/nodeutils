import ShellJs from 'shelljs'
import { contact } from '@const'
import LoggerUtils from './logger'

const closingWord: string = `作者联系方式：${contact.email}`

function exit(): void {
  LoggerUtils.info(['执行完毕，感谢使用', closingWord])

  ShellJs.exit(1)
}

function exitError(props?: {errorMsg: string}): void {
  let resErrorMsg: string = '不好意思，出现了错误，请联系开发者'

  if (props && props.errorMsg) {
    resErrorMsg = props.errorMsg
  }

  LoggerUtils.error([resErrorMsg || '不好意思，出现了错误，请联系开发者', closingWord])
  
  ShellJs.exit(1)
}

export default {
  exit,
  exitError
}