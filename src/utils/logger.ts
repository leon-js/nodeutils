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

function info(message: Message) {
  log('info', message)
}

function warn(message: Message) {
  log('warn', message)
}

function succ(message: Message) {
  log('succ', message)
}

function error(message: Message) {
  log('error', message)
}

function log(type: LogType = 'info', message: Message): void {
  let msg: string = ''

  if (Array.isArray(message)) {
    message.forEach((str: string) => {
      msg = msg + '  ' + str + '\n'
    })
  } else {
    msg = '  ' + message
  }
  
  console.log(
    //@ts-ignore
    Chalk[typeMap[type]](
      `[${type.toUpperCase()}${type.length === 5 ? '' : ' '}]:\n${msg}`
    )
  )
}