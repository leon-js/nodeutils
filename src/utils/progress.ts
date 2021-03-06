import Path from 'path'
import Chalk from 'chalk'
import LoggerUtils from './logger'
import CreateProgress from 'progress-estimator'

let _loader: any = null

/**
 * loading
 * @param task 异步方法
 * @param message 提示消息
 * @param estimate 估计所需的时间
 */
const load = (task: () => Promise<any>, message: string, estimate = 1000) => {
  if (!_loader) {
    _loader = CreateProgress({
      storagePath: Path.join(__dirname, '.progress-estimator'),
    })
  }

  return _loader(task().catch(() => {}), Chalk.blue(message), {
    estimate
  })
}

/**
 * 开始执行记时
 * @param fnAry 异步方法数组
 */
const start = async (fnAry: Function[]) => {
  const startTime = Date.now();

  for (let i = 0; i < fnAry.length; i++) {
    await fnAry[i]()
  }

  const endTime = Date.now();
  const time = ((endTime - startTime) / 1000).toFixed(2);

  LoggerUtils.succ(`✨ Done in ${time}s`, false)
}


export default {
  load,
  start
}