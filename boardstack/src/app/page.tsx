import { Nav } from "@/ui/components/Nav/Nav";
import { Hero } from "@/ui/components/sections/hero/Hero";
import { Testimonials } from "@/ui/components/sections/Testimonials/Testimonials";
import { UsedBy } from "@/ui/components/sections/UsedBy/UsedBy";

export default function Home() {
  return (
    <div className="flex flex-col mx-2  ">
      <header>
        <Nav />
      </header>
      <section>
        <Hero />
      </section>
      <section>
        <UsedBy />
      </section>

      <section>
        <Testimonials />
      </section>
    </div>
  );
}
