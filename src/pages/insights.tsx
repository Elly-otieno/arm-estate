import DefaultLayout from "@/layouts/default";
import { Hero } from "@/components/developments/hero";
import { News } from "@/components/home/news";

export default function Insights() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
      <div className="w-full">
          <Hero title={'BUYER INSIGHTS'} isButton={false}/>
        </div>
        <News isImage={true}/>
        <div className="border-1 border-gray-200 w-full mt-20"></div>
      </section>
    </DefaultLayout>
  );
}
