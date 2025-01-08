import { useStore } from "zustand"
import { TodoStore } from "../store/TodoStore"
import { Close } from "./icons/Close"

export const TaskItem = ({ task }: TaskItemProps) => {
  const deleteTask = useStore(TodoStore, (state) => state.deleteTask)
  return (
    <li className="py-4 px-4 text-left w-full text-light-very-dark-grayish-blue flex items-center justify-between cursor-pointer border-b-2">
      <div className="flex items-center space-x-8">

        {task.name}
      </div>
      <button onClick={() => deleteTask(task.id)}>
        <Close />
      </button>
    </li>
  )
}