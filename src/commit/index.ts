const shell = require('shelljs')
const fs = require('fs')
const path = require('path')

module.exports = () => {
  // shell.cd('~/Desktop/company')
  // console.log(shell.ls())
  // fs.readdir('User/Desktop', (e) => {
  //   console.log(e)
  // })
  console.log(process.cwd(), 123)
  console.log(`这里是commit`)
  // console.log(shell.ls('-d', '*/'))
  shell.ls('-d', '*/').forEach((i: string) => {
    console.log(i)
    // shell.cd(i)
  })
}