import { useStore } from "zustand";
import { TodoStore } from "../store/TodoStore";
import { TasksList } from "./TasksList";

export const TasksListContainer = () => {
  const tasks = useStore(TodoStore, (state) => state.tasks);
  const filter = useStore(TodoStore, (state) => state.filter);
  const clearCompletedTasks = useStore(TodoStore, (state) => state.clearCompletedTasks);
  const setFilter = useStore(TodoStore, (state) => state.setFilter);

  const options: string[] = [
    'All',
    'Active',
    'Completed'
  ]

  const filteredTasks = tasks?.filter((task) => {
    switch (filter) {
      case "active":
        return !task.completed;
      case "completed":
        return task.completed;
      default:
        return true;
    }
  });


  return (
    <>
      <section className="mt-20 w-full md:w-[60%] lg:w-[40%] rounded-md shadow-lg bg-white dark:bg-dark-very-dark-desaturated-blue z-10 relative">
        {
          filteredTasks?.length === 0
            ? null
            : (
              <TasksList tasks={filteredTasks} />
            )
        }
        <section className="w-full bg-white dark:bg-dark-very-dark-desaturated-blue flex items-center justify-between px-4 py-4 rounded-b-md">
          <span className="text-sm text-light-dark-grayish-blue">
            {tasks?.length !== 0 ? tasks?.length : 0} items left
          </span>
          <div className="w-full sm:w-fit absolute translate-y-20 sm:flex sm:relative justify-center sm:translate-y-0 items-center space-x-4 p-4 sm:p-0 dark:bg-dark-very-dark-desaturated-blue bg-white rounded-md sm:rounded-none sm:bg-transparent -translate-x-4 sm:-translate-x-0 text-center">
            {options.map((option, index) => (
              <span onClick={() => setFilter(option.toLowerCase())} key={index} className="text-sm text-light-dark-grayish-blue cursor-pointer transition-colors duration-300 hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue-hover">
                {option}
              </span>
            ))}
          </div>
          <button onClick={clearCompletedTasks} className="text-light-dark-grayish-blue text-sm cursor-pointer transition-colors duration-300 hover:text-light-very-dark-grayish-blue hover:dark:text-dark-light-grayish-blue-hover">Clear completed</button>
        </section>
      </section>
    </>
  )
};
