import { useStore } from "zustand"
import { TodoStore } from "../store/TodoStore"
import { Close } from "./icons/Close"

export const TaskItem = ({ task }: TaskItemProps) => {
  const deleteTask = useStore(TodoStore, (state) => state.deleteTask)
  const setCompleted = useStore(TodoStore, (state) => state.setCompleted)

  const handleToggleCompleted = () => {
    setCompleted(task.id, !task.completed);
  };

  const handleDeleteTask = () => {
    deleteTask(task.id)
  }

  return (
    <li className="py-4 px-4 text-left w-full text-light-very-dark-grayish-blue flex items-center justify-between cursor-pointer border-b-2 dark:border-b-dark-very-dark-grayish-blue-2">
      <div className="flex items-center space-x-8">
        <input
          className="appearance-none h-4 w-4 border-2 border-light-very-dark-grayish-blue rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none transition duration-200 cursor-pointer"
          onChange={handleToggleCompleted}
          type="checkbox"
          checked={task.completed}
        />
        <span className={`dark:text-dark-light-grayish-blue ${task.completed === false ? null : 'line-through text-light-light-grayish-blue'}`}>{task.name}</span>
      </div>
      <button onClick={handleDeleteTask}>
        <Close />
      </button>
    </li>
  )
}