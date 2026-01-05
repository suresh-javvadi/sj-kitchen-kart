import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TopPicks = ({ topPickItems }) => {
  if (!topPickItems) return;

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="flex justify-between gap-2 mb-2">
        <div className="text-xl font-bold">
          <h1>{topPickItems?.[0]?.card?.card?.title}</h1>
        </div>
        <div>
          <button
            onClick={scrollLeft}
            className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {topPickItems?.[0]?.card?.card?.carousel?.map((item) => (
          <div
            key={item?.creativeId}
            className="relative min-w-[292px] rounded-xl"
          >
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${item.creativeId}`}
              alt="Top Pick"
              className="rounded-xl shadow-md"
            />

            {item?.dish?.info?.price && (
              <>
                <h1
                  className={`absolute bottom-7 left-3 text-white font-semibold text-md px-2 py-1 rounded-md ${
                    item.dish.info.finalPrice ? "line-through opacity-70" : ""
                  }`}
                >
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(item.dish.info.price / 100)}
                </h1>

                {item.dish.info.finalPrice && (
                  <h1 className="absolute bottom-1 left-3 text-white font-semibold text-md px-2 py-1 rounded-md">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item.dish.info.finalPrice / 100)}
                  </h1>
                )}

                <button className="absolute bottom-2 right-4 bg-white text-green-500 text-md font-bold py-2 px-12 rounded-md shadow-md transition">
                  ADD
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
