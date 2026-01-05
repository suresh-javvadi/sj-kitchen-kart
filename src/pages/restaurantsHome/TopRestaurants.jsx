import React, { useRef } from "react";
import { Link } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TopRestaurants = ({ topResCards }) => {
  if (!topResCards) return;

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div>
      <div className="my-4 flex justify-between items-center">
        <div className="font-bold text-xl">
          <h1>{topResCards?.header?.title}</h1>
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
        className="flex gap-6 pb-2 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {topResCards?.gridElements?.infoWithStyle?.restaurants?.map((item) => (
          <Link to={`restaurant/${item.info.id}`}>
            <div
              key={item.info.id}
              className="w-64 flex-shrink-0 rounded-lg shadow hover:shadow-xl transition-transform transform hover:scale-105 p-3 bg-white"
            >
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.info.cloudinaryImageId}`}
                alt={item.info.name}
                className="w-full h-40 object-cover rounded-md"
              />

              <h2 className="mt-3 font-semibold truncate">{item.info.name}</h2>
              <p className="text-sm text-gray-600">
                ⭐ {item.info.avgRating} • {item.info.sla?.slaString}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {item.info.cuisines.join(", ")}
              </p>
              <p className="text-xs text-gray-500">{item.info.areaName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;
