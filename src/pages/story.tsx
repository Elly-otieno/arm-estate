import { Hero } from "@/components/developments/hero";
import { Developer } from "@/components/story/developer";
import { Mission } from "@/components/story/mission";
import { ThankYou } from "@/components/story/thanks";
import DefaultLayout from "@/layouts/default";

export default function Story() {
  const subtitle = 'Our business module is built around the vision of providing high-caliber, opulent residences that are nevertheless reasonably priced'
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <div className="w-full">
          <Hero title={"WHO WE ARE"} subtitle={subtitle} isButton={true} label="DISCOVER DEVELOPMENTS" position="lower"/>
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
