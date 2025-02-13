import DefaultLayout from "@/layouts/default";
import { FeaturedDevelopment } from "@/components/home/featured";
import { HomeSection } from "@/components/home/hero";
import { News } from "@/components/home/news";
import { About } from "@/components/home/about";

export default function Home() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <div className="h-screen w-full">
        <HomeSection />
        </div>
        <FeaturedDevelopment />
        <News />
        <About />
      </section>
    </DefaultLayout>
  );
}
