import { Header } from "./components/Header.tsx"

function App() {
  return (
    <main className="max-w-full min-h-screen relative flex flex-col items-center font-primaryRegular py-24">
      <div className="w-full h-[320px] absolute top-0 left-0 bg-hero-pattern-mobile-light sm:bg-hero-pattern-desktop-light bg-cover bg-no-repeat -z-10"></div>
      <Header />
    </main>
  )
}

export default App
