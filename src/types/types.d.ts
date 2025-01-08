type Task = {
  id: string,
  name: string,
  completed: boolean
}

type State = {
  tasks: Task[] | undefined,
  filter: string
}

type Actions = {
  createNewTask: (task: Task) => void,
  deleteTask: (taskId: string) => void,
  setCompleted: (taskId: string, completed: boolean) => void,
  clearCompletedTasks: () => void,
  setFilter: (filter: string) => void
}

type TasksListProps = {
  tasks: Task[] | undefined
}

type TaskItemProps = {
  task: Task
}