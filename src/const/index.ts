const promptListAction: Prompt[] = [{
  type: 'list',
  name: 'actionName',
  message: '请选择要执行的方法',
  choices: ['cmt：提交代码（add commit msg push）']
}]

export {
  promptListAction
}