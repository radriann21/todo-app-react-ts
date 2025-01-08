import { useStore } from "zustand";
import { TodoStore } from "../store/TodoStore";
import { TasksList } from "./TasksList";

export const TasksListContainer = () => {
  const tasks = useStore(TodoStore, (state) => state.tasks);

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
      </section>
      <span className={`mt-8 text-light-very-dark-grayish-blue text-sm ${tasks?.length === 0 ? 'hidden' : null}`}>
        Drag and drop to reorder list
      </span>
    </>
  )
};
