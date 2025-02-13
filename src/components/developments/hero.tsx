export const Hero = () => {
  return (
    <section
      className="relative w-full h-[300px] flex flex-col justify-center bg-cover bg-center text-center px-4 mb-28"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-[#38180c] py-8 px-14 -bottom-14 absolute">
        <h1 className="text-white text-2xl md:text-3xl font-bold">
          DEVELOPMENTS AVAILABLE
        </h1>
      </div>
    </section>
  );
};
