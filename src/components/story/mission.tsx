export const Mission = () => {
    return (
      <section className="py-12 px-4 flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-8 text-center text-[#38180c]">
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold">OUR MISSION</h3>
          <p className="mt-2">To deliver high quality, luxurious housing developments at affordable cost.</p>
        </div>
        <div className="w-full md:w-1/3 triangle-top">
          <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Company Building" className="w-full h-[500px]" />
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold">OUR VISION</h3>
          <p className="mt-2">To be the best-recognized and most highly respected home ownership service brand in Kenya and worldwide.</p>
        </div>
      </section>
    );
  };