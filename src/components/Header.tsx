import { ToogleMode } from "./ToogleMode";
import { TodoInput } from "./TodoInput";

export const Header = () => {
  return (
    <header className="w-full md:w-[60%] lg:w-[40%] z-10">
      <section className="flex items-center justify-between w-full">
        <h1 className="font-primarySemibold text-2xl sm:text-4xl text-white uppercase tracking-widest">
          Todo
        </h1>
        <ToogleMode />
      </section>
      <TodoInput />
    </header>
  );
};
