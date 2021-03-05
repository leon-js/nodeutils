type Str = string

type StringMap = {
  [key in string | number]: Str
}

/**
 * 控制台交互配置项
 * @param type 类型
 * @param name 字段名
 * @param message 提示信息
 * @param choices 选择项
 */
interface Prompt {
  type: string
  name: string
  message: string
  choices?: Array<string | {
    key: string
    name: string
    value: string
  }>
}