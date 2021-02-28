import commit from '../commit'
import LoggerUtils from '@utils/logger'

export default () => {
  const args: string[] = process.argv.slice(2)
  const actionKey: string = args[0]
  
  switch (actionKey) {
    case 'cmt':
      commit({args: args.slice(1)})
      break
    default: 
      LoggerUtils.warn(`
        请输入需要执行（正确）的方法名

        cmt: git提交

        其余功能正在持续开发中...
      `)
      break
  }
}
