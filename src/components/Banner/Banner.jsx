import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[554px] my-10 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/data/pngwing1.png"
            className="max-w-sm rounded-lg"
          />
          <div>
            <h1 className="text-5xl font-bold">
              <p className="heading-text">Books to freshen up your bookshelf</p>
            </h1>

            <button className="btn btn-primary my-6 bg-[#23BE0A] border-none text-white">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
