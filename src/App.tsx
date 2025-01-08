import { Header } from "./components/Header"
import { TasksListContainer } from "./components/TasksListContainer"

function App() {
  return (
    <main className="max-w-full min-h-screen relative flex flex-col items-center font-primaryRegular py-8 sm:py-28">
      <div className="w-full h-[320px] absolute top-0 left-0 bg-hero-pattern-mobile-light sm:bg-hero-pattern-desktop-light bg-cover bg-no-repeat -z-10"></div>
      <Header />
      <TasksListContainer />
    </main>
  )
}

export default App
