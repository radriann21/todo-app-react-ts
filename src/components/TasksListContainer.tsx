import { useStore } from "zustand";
import { TodoStore } from "../store/TodoStore";
import { TasksList } from "./TasksList";

export const TasksListContainer = () => {
  const tasks = useStore(TodoStore, (state) => state.tasks);

  const options: string[] = [
    'All',
    'Active',
    'Completed'
  ]

  return (
    <>
      <section className="mt-20 w-[40%] rounded-md shadow-lg bg-white">
        {
          tasks?.length === 0
            ? null
            : (
              <TasksList tasks={tasks} />
            )
        }
        <section className="w-full bg-white flex items-center justify-between px-4 py-4 rounded-b-md">
          <span className="text-sm text-light-dark-grayish-blue">
            {tasks?.length !== 0 ? tasks?.length : 0} items left
          </span>
          <div className="flex items-center space-x-4">
            {options.map((option, index) => (
              <span key={index} className="text-sm text-light-dark-grayish-blue cursor-pointer transition-colors duration-300 hover:text-light-very-dark-grayish-blue">
                {option}
              </span>
            ))}
          </div>
          <button className="text-light-dark-grayish-blue text-sm cursor-pointer transition-colors duration-300 hover:text-light-very-dark-grayish-blue">Clear completed</button>
        </section>
      </section>
    </>
  )
};
