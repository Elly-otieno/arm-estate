import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";

export const About = () => {
    const navigate = useNavigate();
    return (
      <section className="py-12 px-4 flex flex-col md:flex-row items-center max-w-2xl mx-auto gap-8" data-aos="fade-up">
        <div className="w-full md:w-1/2 triangle-top">
          <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Company Building" className="w-full h-[500px]" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-lg md:text-2xl font-semibold text-[#38180c]">ABOUT US</h2>
          <p className="text-[#38180c] italic mt-2">“One of our top concerns is ensuring the satisfaction of our customers.”</p>
          <p className="text-[#38180c] mt-4">Our desire to deliver fresh, creative products, reasonable prices, and eco-friendly construction methods within our aggregate experience of more than 10 years in the industry motivated us to enter the real estate market.</p>
          <Button className="border-3 border-[#38180c] text-[#38180c] font-bold rounded-none bg-transparent w-fit mt-6"
          onPress={() => navigate("/buyer-insights")}>
          OUR STORY
        </Button>
        </div>
      </section>
    );
  };