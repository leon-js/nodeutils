/**
 * 联系方式
 * @param email 作者邮箱
 */
interface Contact {
  email: string
}

const contact: Contact = {
  email: 'lianglihao.js98@gmail.com'
}

const promptListAction: Prompt[] = [{
  type: 'list',
  name: 'actionName',
  message: '请选择要执行的方法',
  choices: [
    {
      key: 'cmt',
      value: 'cmt',
      name: '提交代码（add -> commit -> push）',
    },
    {
      key: 'chck',
      value: 'chck',
      name: '切换分之（checkout）',
    },
    {
      key: 'ui',
      value: 'ui',
      name: '可视化（ui）',
    },
    {
      key: 'exit',
      value: 'exit',
      name: '退出（exit）',
    }
  ]
}]

export {
  contact,
  promptListAction
}