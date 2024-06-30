import React from "react";

const Community = () => {
  return (
    <section className="bg-[#f7fdff] pt-20 px-24 mb-20">
      <p className="text-5xl font-medium italic">
        Your <span className="text-[#8064a2]">Hobby</span> , Your
        <span className="text-blue-400"> Community ... </span>
      </p>
      <div>
        <button className="bg-[#8064a2] text-white p-3 rounded-2xl mt-8 mb-16">
          Get Started
        </button>
      </div>
      <img
        alt="Landing Illustration"
        loading="lazy"
        width="1240"
        height="302"
        decoding="async"
        data-nimg="1"
        class="Home_people-illustration__vfFMM"
        src="https://hobbycue.com/_next/static/media/community-bottom.79dd2552.svg"
      ></img>
    </section>
  );
};

export default Community;
