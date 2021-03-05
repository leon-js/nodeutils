#!/usr/bin/env node

// 上述描述是告诉机器，需要用node来执行这个文件

/**
 * 解决tsconfig配置paths后只使用tsc编译的话找不到配置路径
 * 
 * tsconfig.json
 * "paths": {
 *   "@utils": ["src/utils"]
 * }
 * 
 * 上下两个文件配合使用
 * 
 * package.json
 * "_moduleAliases": {
 *   "@utils": "dist/utils"
 * }
 */
require('module-alias/register')

import bin from './bin'
import { LoggerUtils } from '@utils'

LoggerUtils.succ(`
  欢迎使用llh小工具，更多功能正在开发中！

  联系方式：lianglihao.js98@gmail.com
`)

bin()
