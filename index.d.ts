type Str = string

interface Prompt {
  type: string
  name: string
  message: string
  choices?: shell.ShellArray | string[]
}