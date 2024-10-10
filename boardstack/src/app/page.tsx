import { Nav } from "@/ui/components/Nav/Nav";
import { Hero } from "@/ui/components/sections/hero/Hero";

export default function Home() {
  return (
    <div className="bg-light-primary dark:bg-dark-primary flex flex-col ">
      <header>
        <Nav />
      </header>
      <section>
        <Hero />
      </section>
    </div>
  );
}
