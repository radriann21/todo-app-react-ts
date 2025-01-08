type Task = {
  id: string,
  name: string,
  completed: boolean
}

type State = {
  tasks: Task[] | undefined
}

type Actions = {
  createNewTask: (task: Task) => void,
  updateTask: (task: Task) => void,
  deleteTask: (taskId: string) => void,
  setCompleted: (taskId: string) => void
}

type TasksListProps = {
  tasks: Task[] | undefined
}

type TaskItemProps = {
  task: Task
}