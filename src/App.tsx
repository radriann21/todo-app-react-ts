import { Header } from "./components/Header"
import { TasksListContainer } from "./components/TasksListContainer"

function App() {
  return (
    <main className="max-w-full min-h-screen relative flex flex-col items-center font-primaryRegular p-8 sm:py-28 dark:bg-dark-very-dark-blue dark:text-dark-light-grayish-blue">
      <div className="w-full h-[320px] absolute top-0 left-0 dark:bg-hero-pattern-mobile-dark sm:dark:bg-hero-pattern-desktop-dark bg-hero-pattern-mobile-light sm:bg-hero-pattern-desktop-light bg-cover bg-no-repeat"></div>
      <Header />
      <TasksListContainer />
      <footer className="w-full text-center mt-24 sm:mt-8">
        <span className="font-primaryRegular text-light-dark-grayish-blue text-sm dark:text-dark-dark-grayish-blue">Drag and drop to reorder list</span>
      </footer>
    </main>
  )
}

export default App
