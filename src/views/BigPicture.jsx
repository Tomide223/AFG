import React from "react";
import TextBox from "../components/TextBox";

import Button from "../components/button";

import ImageSlider from "./ImageSlider";

const BigPicture = () => {
  return (
    <>
      <div className="max-w-7xl w-[90%] mx-auto px-5 py-20">
      <div className="flex flex-col md:flex-row min-h-screen gap-3  bg-white ">
        <div className="flex flex-col justify-left">
          <TextBox
            children={
              <>
                <p className="text-black text-5xl font-times font-medium">
                  See the Big Picture
                </p>
                <p className=" text-xs font-sans text-gray-400 ">
                  Area turns your data into clear, vibrant visuals that show you
                  exactly what's happening in each region.
                </p>
              </>
            }
            gap="gap-8"
            my="my-4"
          />
          <TextBox
            children={
              <>
                <div className="flex flex-row gap-4">
                  <p className="text-gray-300 text-sm font-medium">01</p>
                  <p className="text-xs text-black font-thin ">
                    Spot Trends in Seconds: No more digging through numbers.{" "}
                  </p>
                </div>
              </>
            }
            gap="gap-2"
            my="my-2"
          />
          <TextBox
            children={
              <>
                <div className="flex flex-row gap-4">
                  <p className="text-gray-300 text-sm font-medium">02</p>
                  <p className=" text-xs text-black font-thin ">
                    Get Everyone on the Same Page: Share easy-to-understand
                    reports with your team.{" "}
                  </p>
                </div>
              </>
            }
            gap="gap-2"
            my="my-2"
          />
          <TextBox
            children={
              <>
                <div className="flex flex-row gap-4">
                  <p className="text-gray-300 text-sm font-medium">03</p>
                  <p className=" text-xs text-black font-thin ">
                    Make Presentations Pop: Interactive maps and dashboards keep
                    your audience engaged.{" "}
                  </p>
                </div>
              </>
            }
            gap="gap-2"
            my="my-2"
          />
          <TextBox
            children={
              <>
                <div className="flex flex-row gap-4">
                  <p className="text-gray-300 text-sm font-medium">04</p>
                  <p className=" text-xs text-black font-thin ">
                    Your Global Snapshot: Get a quick, clear overview of your
                    entire operation.{" "}
                  </p>
                </div>
              </>
            }
            gap="gap-2"
            my="my-2"
          />
          <Button />
        </div>
        <ImageSlider />
        </div>
        </div>
    </>
  );
};

export default BigPicture;
