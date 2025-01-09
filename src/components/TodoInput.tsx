import { useState } from "react"
import { useStore } from "zustand"
import { TodoStore } from "../store/TodoStore"

export const TodoInput = () => {
  const [taskName, setTaskName] = useState<string | null>(null)

  const createNewTask = useStore(TodoStore, (state) => state.createNewTask)

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setTaskName(value)
  }

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()
    if (taskName === null || taskName === '') {
      return
    }
    const newTask: Task = {
      id: crypto.randomUUID(),
      name: taskName,
      completed: false
    }
    createNewTask(newTask)
  }

  return (
    <section className="w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <input onChange={handleInput} className="py-4 px-4 bg-white dark:bg-dark-very-dark-desaturated-blue rounded-md mt-10 w-full outline-none border-none" type="text" placeholder="Create a new todo..." />
      </form>
    </section>
  )
}