import { create } from "zustand";

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
  deleteTask: (task: Task) => void,
}

export const TodoStore = create<State & Actions>((set) => ({
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]') || [],
  createNewTask: () => { },
  updateTask: () => { },
  deleteTask: () => { }
}))