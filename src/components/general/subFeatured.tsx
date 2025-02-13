import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";

function SubFeatured() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col mx-2">
        <div className="mt-8 border-4 border-black overflow-hidden max-w-4xl mx-auto p-1">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lotus Residence"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0  bg-[#38180c] p-4">
            <h3 className="text-lg font-bold text-left text-white">
              SOUTH C, NAIROBI
            </h3>
            <h2 className="text-2xl font-bold text-left text-white">
              LOTUS RESIDENCE
            </h2>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center">
            <div>
              <p className="text-sm text-[#38180c] font-normal">TYPE</p>
              <p className="font-bold text-[#38180c]">APARTMENT</p>
            </div>
            <div>
              <p className="text-sm text-[#38180c] font-normal">STATUS</p>
              <p className="font-bold text-[#38180c]">UNDER CONSTRUCTION</p>
            </div>
            <div>
              <p className="text-sm text-[#38180c] font-normal">SIZE</p>
              <p className="font-bold text-[#38180c]">FROM: 25 SQM</p>
            </div>
            <div>
              <p className="text-sm text-[#38180c] font-normal">PRICE</p>
              <p className="font-bold text-[#38180c]">KSH. 3,000,000</p>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="mt-2 bg-[#b69a8f] rounded-none text-xl text-white py-8 w-fit"
        onPress={() => navigate("/buyer-insights")}
      >
        FULL DETAILS
      </Button>
    </div>
  )
}

export default SubFeatured