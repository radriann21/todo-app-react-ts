import { create } from "zustand";

export const TodoStore = create<State & Actions>((set) => ({
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]') || [],
  createNewTask: (task: Task) => set((state) => {
    const updateTasks = [...(state.tasks || []), task]
    localStorage.setItem('tasks', JSON.stringify(updateTasks))
    return { tasks: updateTasks }
  }),
  updateTask: () => { },
  deleteTask: (taskId: string) => set((state) => {
    const filteredTasks = state.tasks?.filter(task => task.id !== taskId)
    localStorage.setItem('tasks', JSON.stringify(filteredTasks))
    return { tasks: filteredTasks }
  })
}))