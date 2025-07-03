import React from "react";
import TextBox from "../components/TextBox";
import "@fortawesome/fontawesome-free/css/all.min.css";
import hills from "../assets/hills.png";

const BenefitContainer = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-5 py-20">
      <div className="min-h-screen flex flex-col  bg-white  ">
        <TextBox />

        <div className="flex flex-col md:flex-row justify-left gap-6">
          <TextBox
            children={
              <>
                <i className="fas fa-chain"></i>

                <p className=" text-base  font-times font-bold">
                  Amplify Insights
                </p>
                <p className=" text-xs font-sans text-gray-400 ">
                  Unlock data-driven decisions with comprehensive analytics,
                  revealing key opportunities for strategic regional growth.
                </p>
              </>
            }
            gap="gap-4"
          />
          <TextBox
            children={
              <>
                <i class="fas fa-earth-americas"></i>

                <p className=" text-base   font-times font-bold">
                  Control Your Global Presence
                </p>
                <p className=" text-xs font-sans text-gray-400 ">
                  Manage and track satellite offices, ensuring consistent
                  performance and streamlined operations everywhere.
                </p>
              </>
            }
            gap="gap-4"
          />
          <TextBox
            children={
              <>
                <i class="fas fa-user"></i>

                <p className=" text-base   font-times font-bold">
                  Remove Language Barriers
                </p>
                <p className=" text-xs font-sans text-gray-400 ">
                  Adapt to diverse markets with built-in localization for clear
                  communication and enhanced user experience.
                </p>
              </>
            }
            gap="gap-4"
          />
          <TextBox
            children={
              <>
                <i class="fas fa-chart-line"></i>
                <p className=" text-base   font-times font-bold">
                  Visualize Growth
                </p>
                <p className=" text-xs font-sans text-gray-400 ">
                  Generate precise, visually compelling reports that illustrate
                  your growth trajectories across all regions.
                </p>
              </>
            }
            gap="gap-4"
          />
        </div>
        <div className="w-[740] h-[600]  mb-5 rounded-[24px]">
          <img
            src={hills}
            alt="Hills picture"
            className="w-full h-full object-cover"
          />
        </div>
        </div>
        </div>
    </>
  );
};

export default BenefitContainer;
