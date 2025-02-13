import SubFeatured from "../general/subFeatured";


export const Featured = () => {
  return (
    <section className="pb-12 px-4 text-center flex flex-col">
      <h2 className="text-lg text-[#38180c] md:text-2xl font-normal">
        FEATURED DEVELOPMENT
      </h2>
      <p className="text-[#38180c] font-light text-lg  mx-auto mt-8">
        Our business module is built around the vision of providing high-
        <span className="block">
          caliber, opulent residences that are nevertheless reasonably priced.
        </span>
      </p>
      <SubFeatured />
    </section>
  );
};
