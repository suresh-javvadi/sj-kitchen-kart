import React from "react";
import { Link } from "react-router";

const RestaurantsList = ({ resList }) => {
  if (!resList) return;

  return (
    <div>
      <div className="flex gap-6 flex-wrap">
        {resList?.gridElements?.infoWithStyle?.restaurants?.map((item) => (
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

export default RestaurantsList;
