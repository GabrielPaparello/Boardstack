import { Nav } from "@/ui/components/Nav/Nav";
import { Blog } from "@/ui/components/sections/Blog/Blog";
import { Footer } from "@/ui/components/sections/footer/Footer";
import { Hero } from "@/ui/components/sections/hero/Hero";
import { Testimonials } from "@/ui/components/sections/Testimonials/Testimonials";
import { Tutorial } from "@/ui/components/sections/Tutorial/Tutorial";
import { UsedBy } from "@/ui/components/sections/UsedBy/UsedBy";

export default function Home() {
  return (
    <div className="flex flex-col px-2   ">
      <header>
        <Nav />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <UsedBy />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <Tutorial />
        </section>
        <section>
          <Blog />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
