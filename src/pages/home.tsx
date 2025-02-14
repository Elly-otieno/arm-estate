import DefaultLayout from "@/layouts/default";
import { Featured } from "@/components/home/featured";
import { HomeSection } from "@/components/home/hero";
import { News } from "@/components/home/news";
import { About } from "@/components/home/about";

export default function Home() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10" data-aos="fade-up">
        <div className="h-screen w-full">
        <HomeSection />
        </div>
        <Featured />
        <div className="border-1 border-gray-200 w-full mt-20"></div>
        <News />
        <div className="border-1 border-gray-200 w-full mt-20"></div>
        <About />
        <div className="border-1 border-gray-200 w-full mt-20"></div>
      </section>
    </DefaultLayout>
  );
}
