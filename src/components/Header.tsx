import { Moon } from "./icons/Moon";
import { TodoInput } from "./TodoInput";

export const Header = () => {
  return (
    <header className="w-[40%]">
      <section className="flex items-center justify-between w-full">
        <h1 className="font-primarySemibold  text-2xl sm:text-4xl text-white uppercase tracking-widest">
          Todo
        </h1>
        <Moon />
      </section>
      <TodoInput />
    </header>
  );
};
