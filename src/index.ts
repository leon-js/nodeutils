#!/usr/bin/env node

// 上述描述是告诉机器，需要用node来执行这个文件

/**
 * 解决tsconfig配置paths后只使用tsc编译的话找不到配置路径
 */
require('module-alias/register')

import bin from './bin'

bin()

