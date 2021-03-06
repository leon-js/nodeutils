import Chalk from 'chalk'

type Message = string | string[]
type LogType = 'info' | 'warn' | 'succ' | 'error'

export default {
  info,
  warn,
  succ,
  error
}

const typeMap: StringMap = {
  info: 'blue',
  succ: 'green',
  warn: 'yellow',
  error: 'red'
}

/**
 * 打印普通信息
 */
function info(message: Message, usePrefix = true) {
  log('info', message, usePrefix)
}

/**
 * 打印警告信息
 */
function warn(message: Message, usePrefix = true) {
  log('warn', message, usePrefix)
}

/**
 * 打印成功信息
 */
function succ(message: Message, usePrefix = true) {
  log('succ', message, usePrefix)
}

/**
 * 打印异常信息
 */
function error(message: Message, usePrefix = true) {
  log('error', message, usePrefix)
}

/**
 * 打印信息
 * @param type 类型
 * @param message 消息（若是数组，则换行显示）
 * @param usePrefix 是否使用前缀
 */
function log(type: LogType = 'info', message: Message, usePrefix: boolean): void {
  let msg: Message = ''
  let prefixContent = usePrefix ? `[${type.toUpperCase()}${type.length === 5 ? '' : ' '}]:` : ''

  if (Array.isArray(message)) {
    message.forEach((str: string) => {
      msg = msg + '  ' + str + '\n'
    })
  } else {
    msg = message
  }

  console.log(
    //@ts-ignore
    Chalk[typeMap[type] || 'info'](
      `${prefixContent}${typeof message === 'string' ? '  ' : '\n'}${msg}`
    )
  )
}