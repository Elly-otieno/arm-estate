import DefaultLayout from "@/layouts/default";
import { Hero } from "@/components/developments/hero";
// import { News } from "@/components/home/news";

export default function Chat() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center relative gap-4 pb-8 md:pb-10 h-screen">
        <div className="w-full">
          <Hero title={"CONTACT US"} isButton={false}/>
          <div className="py-12 px-4 text-left flex flex-col w-full  max-w-4xl mx-auto">
            <h1 className="text-lg md:text-2xl text-left font-semibold text-[#38180c]">LEAVE A MESSAGE</h1>
          </div>
        </div>
        {/* <News isImage={true}/> */}
        <div className="border-1 border-gray-200 w-full mt-20 absolute bottom-5"></div>
      </section>
    </DefaultLayout>
  );
}
