import React from "react";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import clsx from "clsx";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12">
      <div className="container items-center mx-auto ">
        <div className="">
          <div className="md:flex mb-8 md:mb-2 mx-auto justify-between">
            <div className="mb-4">
              <Link
                className="flex justify-start items-center gap-1"
                color="foreground"
                href="/"
              >
                <p className="font-bold text-inherit text-[#662c17] flex flex-col items-center text-4xl">
                  ARM&nbsp;
                  <span className="font-medium text-2xl">ESTATES</span>{" "}
                </p>
              </Link>
            </div>
            <div className="text-[#662c17]">
              <p className="font-bold mb-4 md:mb-10">CONTACT US</p>
              <div>
                <p className="font-bold text-black">A.R.M & BROTHERS ESTATES LIMITED</p>
                <p className="text-sm font-light">
                  FCB MIHRAB, MEZZANINE FLOOR, UNIT F, LENANA ROAD
                </p>
                <p className="text-sm font-light"><span className="font-bold text-black">A:</span> P.O. BOX 71212-00622, JUJA</p>
                <p className="text-sm font-light"><span className="font-bold text-black">E:</span> INFO@ARMESTATES.COM</p>
                <p className="text-sm font-light"><span className="font-bold text-black">P:</span> +254 703 555 444</p>
              </div>
            </div>
            <div className="md:w-1/3 mb-8 md:mb-0 text-[#662c17] mt-4 md:mt-0">
              <p className="font-bold mb-4 md:mb-10">QUICK ACCESS</p>
              <div className="flex flex-col">
                {siteConfig.navItems.map((item) => (
                  <div key={item.href} className="text-[#662c17] cursor-pointer">
                    <Link
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium"
                      )}
                      color="foreground"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:flex items-center mx-auto justify-center max:w-2/3 mt-8">
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
              alt="Real Estate"
              className="w-full max-h-[300px] object-fill" 
            />
          </div>
        </div>
        {/* Copyright notice */}
        <div className="mt-8 pt-4 text-center text-sm">
          <p>
            COPYRIGHT &copy; {currentYear} A.R.M & BROTHERS ESTATES LIMITED. 
            <span className="block">ALL RIGHTS RESERVED.</span> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
