import { Hero } from "@/components/developments/hero";
import SubFeatured from "@/components/general/subFeatured";
import DefaultLayout from "@/layouts/default";

export default function Developments() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <div className="w-full">
          <Hero title={'DEVELOPMENTS AVAILABLE'} isButton={false}/>
        </div>
        <SubFeatured />
        <div className="border-1 border-gray-200 w-full mt-20"></div>
      </section>
    </DefaultLayout>
  );
}
