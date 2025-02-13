import { Hero } from "@/components/developments/hero";
import { Developer } from "@/components/story/developer";
import { Mission } from "@/components/story/mission";
import { ThankYou } from "@/components/story/thanks";
import DefaultLayout from "@/layouts/default";

export default function Story() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <div className="w-full">
          <Hero title={"DEVELOPMENTS AVAILABLE"} />
        </div>
        <Developer />
        <Mission />
        <div className="border-1 border-gray-200 w-full mt-20"></div>
        <ThankYou />
        <div className="border-1 border-gray-200 w-full mt-20"></div>
      </section>
    </DefaultLayout>
  );
}
