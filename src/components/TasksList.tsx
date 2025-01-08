import { TaskItem } from "./TaskiItem"

export const TasksList = ({ tasks }: TasksListProps) => {
  return (
    <div>
      <ul className="w-full flex flex-col list-none items-center overflow-auto">
        {tasks?.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}