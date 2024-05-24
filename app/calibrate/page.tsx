"use client";

import { EarthIcon, RadioTower, SignalHigh } from "lucide-react";
import React, { useState } from "react";
import { sendAnalysis } from "@/lib/actions/action";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { calculateStatus, evaluatePerformance } from "@/lib/utils";

interface LoadProp {
  setResult: React.Dispatch<React.SetStateAction<string | null>>;
  start: boolean;
}

interface Values {
  rsrp: number;
  rsrq: number;
  inference: number;
}

const ModalLoad = ({ setResult, start }: LoadProp) => {
  const { pending, data } = useFormStatus();

  if (data != null) {
    const resultData = Object.fromEntries(data);
  }

  const rsp = data?.get("rsrp");
  const rsq = data?.get("rsrq");
  const inference = data?.get("inference");

  if (pending != true && start == true) {
    setResult(evaluatePerformance(rsp, rsq, inference));
  }

  return (
    <div
      className={clsx(
        `flex-col justify-center transition-all duration-200 ease-out items-center w-full  h-full bg-[#ffffffad] absolute left-0 top-0`,
        { flex: pending == true },
        { hidden: pending == false }
      )}
    >
      <EarthIcon
        className=" animate-bounce transition-all duration-400 ease-linear"
        color="black"
        size={100}
      />
      <br />
      <p className=" animate-pulse font-semibold text-xl">Analyzing...</p>
    </div>
  );
};

const InferenceCard = ({
  title,
  values,
}: {
  title: string;
  values: Values;
}) => {
  const result = evaluatePerformance(
    values.rsrp,
    values.rsrq,
    values.inference
  );

  let suggestion: String = "";

  if (result == "Poor" || result == "Fair") {
    suggestion = "The location fits conditions for deployment";
  } else {
    suggestion = "The location doesn't fit conditions for deployment";
  }

  return (
    <div className=" transition-all duration-200 ease-linear absolute w-[24rem] bottom-10 right-10 rounded-xl p-6 bg-white shadow-2xl">
      <h1 className=" text-xl font-semibold">{suggestion}</h1>
      <br />
      <p>The inference quality of the following coordinates is</p>
      <br />
      <div
        className={clsx(
          ` p-6 flex border-2 items-center space-x-5 border-black text-black rounded-lg`,
          {
            "border-emerald-500": result == "Excellent",
          },
          {
            "border-red-600": result == "Poor",
          }
        )}
      >
        <SignalHigh size={42} />
        <p className=" text-xl font-semibold capitalize">
          {evaluatePerformance(values.rsrp, values.rsrq, values.inference)}
        </p>
      </div>
    </div>
  );
};

const CalibratePage = () => {
  const [result, setResult] = useState<string | null>(null);
  const [start, setStart] = useState(false);
  const [values, setValues] = useState({
    rsrp: 0.0,
    rsrq: 0.0,
    inference: 0.0,
  });

  return (
    <div className=" relative w-full h-[80vh] overflow-hidden">
      {result != null && <InferenceCard title={result} values={values} />}

      <div className=" relative w-[50%] mx-auto h-fit p-10 rounded-lg border-2 border-black">
        <div className="">
          <h1 className=" text-4xl font-bold">Analyze cell depoloyment</h1>
          <br />
          <p className=" font-semibold text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            consequuntur eaque alias voluptatum velit quae atque quo omnis sint
            ut iste dolorum nobis ipsum, ratione dignissimos facere incidunt
            minima eos.
          </p>
          <br />

          <form
            onSubmit={() => setStart(true)}
            action={sendAnalysis}
            className=" "
          >
            <ModalLoad setResult={setResult} start={start} />
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
                  name="rsrp"
                  type="text"
                  placeholder="eg. -90dBm"
                  onChange={(e) =>
                    setValues({ ...values, rsrp: parseFloat(e.target.value) })
                  }
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
                  name="rsrq"
                  type="text"
                  placeholder="eg. -20dBm"
                  onChange={(e) =>
                    setValues({ ...values, rsrq: parseFloat(e.target.value) })
                  }
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
                  name="coverage"
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
                  name="inference"
                  type="text"
                  placeholder="eg. -90dBm"
                  onChange={(e) =>
                    setValues({
                      ...values,
                      inference: parseFloat(e.target.value),
                    })
                  }
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
                  name="size"
                  type="text"
                  placeholder="eg. 1km"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-gray-900 mt-5 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-base px-5 py-5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
            >
              <RadioTower className=" mr-2" />
              Deploy Cell
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalibratePage;
