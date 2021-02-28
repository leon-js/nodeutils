import Chalk from 'chalk'

type LogType = 'info' | 'warn' | 'succ' | 'error'

export default {
  info,
  warn,
  succ,
  error
}

const typeMap: { [type: string]: string } = {
  info: 'blue',
  succ: 'green',
  warn: 'yellow',
  error: 'red'
}

function info(...message: string[]) {
  log('info', ...message)
}

function warn(...message: string[]) {
  log('warn', ...message)
}

function succ(...message: string[]) {
  log('succ', ...message)
}

function error(...message: string[]) {
  log('error', ...message)
}

function log(type: LogType = 'info', ...message: string[]): void {
  console.log(
    //@ts-ignore
    Chalk[typeMap[type]](
      `[${type.toUpperCase()}${type.length === 5 ? '' : ' '}]:${message}`
    )
  )
}