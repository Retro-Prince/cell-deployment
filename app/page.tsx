import React from "react";
import background from "@/images/aleksandr-popov-p1vPC78w5_A-unsplash.jpg";
import Image from "next/image";
import logo from "@/images/8151034.jpg";
import globe from "@/images/Ptdh2MbG_4x.png";
import { ArrowRight, RadioReceiver, RadioTower } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div className=" grid grid-cols-2 w-[90%] gap-x-10 mt-[6rem]">
      <div className=" ">
        <h1 className=" max-w-[90%] text-7xl leading-[6rem] font-extrabold">
          Analyzing & deployment of cells done efficiciently
        </h1>

        <p className=" my-10 font-medium max-w-[90%] text-gray-700 text-2xl">
          A simple and effective way to analyze and deploy cells to suitable
          locations.
        </p>

        <Link href={"/calibrate"}>
          <button className=" py-5 px-10 bg-black text-white flex items-center space-x-4">
            <p className=" font-semibold text-xl">Begin Calibrations</p>
            <ArrowRight color="white" size={32} />
          </button>
        </Link>
      </div>

      <div className=" relative w-full h-[90vh]">
        <Image src={globe} fill alt="" />
      </div>

      {/* <div className=" w-full h-full grid grid-cols-2">
        <div className=" p-20">
          <h1 className=" text-4xl font-bold">Analyze cell depoloyment</h1>
          <br />
          <p className=" font-semibold text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            consequuntur eaque alias voluptatum velit quae atque quo omnis sint
            ut iste dolorum nobis ipsum, ratione dignissimos facere incidunt
            minima eos.
          </p>
          <br />

          <form className=" ">
            <div className=" gap-10 grid grid-cols-2">
              <div className=" ">
                <label
                  className=" font-semibold text-black text-lg"
                  htmlFor="rsrp"
                >
                  Signal Strenght (RSRP)
                </label>
                <br />
                <input
                  className=" w-full mt-2 p-4 border-2 border-gray-300 rounded-lg"
                  id="rsrp"
                  type="text"
                  placeholder="eg. -90dBm"
                />
              </div>
              <div className=" ">
                <label
                  className=" font-semibold text-black text-lg"
                  htmlFor="rsrq"
                >
                  Signal Quality (RSRQ)
                </label>
                <br />
                <input
                  className=" w-full mt-2 p-4 border-2 border-gray-300 rounded-lg"
                  id="rsrq"
                  type="text"
                  placeholder="eg. -20dBm"
                />
              </div>
              <div className=" ">
                <label
                  className=" font-semibold text-black text-lg"
                  htmlFor="coverage"
                >
                  Coverage
                </label>
                <br />
                <input
                  className=" w-full mt-2 p-4 border-2 border-gray-300 rounded-lg"
                  id="coverage"
                  type="text"
                  placeholder="Maximum coverage possible"
                />
              </div>
              <div className=" ">
                <label
                  className=" font-semibold text-black text-lg"
                  htmlFor="inference"
                >
                  Inference Level
                </label>
                <br />
                <input
                  className=" w-full mt-2 p-4 border-2 border-gray-300 rounded-lg"
                  id="inference"
                  type="text"
                  placeholder="eg. -90dBm"
                />
              </div>
              <div className=" ">
                <label
                  className=" font-semibold text-black text-lg"
                  htmlFor="size"
                >
                  Coverage Size
                </label>
                <br />
                <input
                  className=" w-full mt-2 p-4 border-2 border-gray-300 rounded-lg"
                  id="size"
                  type="text"
                  placeholder="eg. 1km"
                />
              </div>
            </div>
            <button
              type="button"
              className="text-gray-900 mt-5 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-base px-5 py-5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
            >
              <RadioTower className=" mr-2" />
              Deploy Cell
            </button>
          </form>
        </div>
        <div className=" relative w-full h-full bg-violet-100">
          <Image src={background} alt="" fill />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
