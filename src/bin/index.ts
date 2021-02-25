#!/usr/bin/env node

// 上述描述是告诉机器，需要用node来执行这个文件

const commit = require('../commit')

const args = process.argv.slice(2)
const actionKey = args[0]

switch (actionKey) {
  case 'cmt':
    commit({args: args.slice(1)})
    break
  default: 
    console.error('请输入需要执行（正确）的方法名')
    break
}

export = {}