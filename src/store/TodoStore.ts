import { create } from "zustand";

export const TodoStore = create<State & Actions>((set) => ({
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]') || [],
  filter: 'all',
  createNewTask: (task) => set((state) => {
    const updateTasks = [...(state.tasks || []), task];
    localStorage.setItem('tasks', JSON.stringify(updateTasks));
    return { tasks: updateTasks };
  }),
  deleteTask: (taskId) => set((state) => {
    const filteredTasks = state.tasks?.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    return { tasks: filteredTasks };
  }),
  setCompleted: (taskId: string, completed: boolean) => set((state) => {
    const updateTasks = state.tasks?.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed };
      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(updateTasks));
    return { tasks: updateTasks };
  }),
  clearCompletedTasks: () => set((state) => {
    const filteredTasks = state.tasks?.filter(task => task.completed !== true)
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    return { tasks: filteredTasks }
  }),
  setFilter: (filter: string) => set((state) => ({ ...state, filter }))
}));