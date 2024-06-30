"use client";
import React, { useState } from "react";
import Form from "./Form";

const Landing = () => {
  const [sign, setSign] = useState(true);
  return (
    <section>
      <div className="bg-[#f7f5f9]">
        <main className="mx-5 md:mx-28  pt-14 grid md:grid-cols-[2fr_1fr]  gap-x-[7.5rem]">
          <div className="space-y-4">
            <h1 className="italic text-3xl md:text-[2.2rem] font-bold tracking-wide mb-10 leading-[2.5rem]">
              Explore your <span className="text-cyan-700">hobby</span> or{" "}
              <span className="text-[#8064a2]">passion</span>
            </h1>
            <p className="tracking-wide ">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform.
            </p>
            <p class="tracking-wide ">
              Your hobby may be about visual or performing arts, sports, games,
              gardening, model making, cooking, indoor or outdoor activities…
              <br />
              <br />
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
            <img
              alt="Landing "
              loading="lazy"
              width="700"
              height="300"
              src="https://hobbycue.com/_next/static/media/landing-illustration.36d12f2d.svg"
              className="mt-10 pt-10"
            ></img>
          </div>

          <div id="signin" className="mt-10 md:mt-4">
            <div className="text-center md:text-left mb-14 relative w-fit mx-auto  ">
              <div className="flex justify-center md:justify-start gap-x-8">
                <button
                  className=""
                  onClick={() => {
                    setSign(true);
                  }}
                >
                  <h1
                    className={`text-3xl font-semibold ${
                      sign ? "text-[#8064a2]" : "text-gray-400"
                    }`}
                  >
                    Sign in
                  </h1>
                </button>
                <button
                  className=""
                  onClick={() => {
                    setSign(false);
                  }}
                >
                  <h1
                    className={`text-3xl font-semibold ${
                      !sign ? "text-[#8064a2]" : "text-gray-400"
                    }`}
                  >
                    Join
                  </h1>
                </button>
                <div
                  className={`absolute rounded-lg -bottom-2 border-b-2 bg-[#8064a2]  h-[6px]  ${
                    sign ? "left-0 w-24" : "right-0 w-14"
                  }  transition-all ease-in-out delay-150`}
                >
                  {" "}
                </div>
              </div>
            </div>

            <div>
              <button className=" flex items-center justify-center mb-5 border-[1.5px] text-xs border-[#8064a2] rounded-lg  w-full  px-7 pb-2 pt-2  font-bold  tracking-wide ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <p>Continue with Google</p>
              </button>
              <button className=" flex items-center justify-center mb-5 border-[1.5px] text-xs border-[#8064a2] rounded-lg  w-full  px-7 pb-2 pt-2  font-bold  tracking-wide ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
                <p>Continue with Facebook</p>
              </button>
            </div>

            <Form signin={sign} text={sign ? "sign" : "join"} />
          </div>
        </main>
      </div>
    </section>
  );
};

export default Landing;
