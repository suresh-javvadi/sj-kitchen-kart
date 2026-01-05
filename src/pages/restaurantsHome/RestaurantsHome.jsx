import React, { useEffect, useState } from "react";
import BannerItems from "./BannerItems";
import TopRestaurants from "./TopRestaurants";
import RestaurantsList from "./RestaurantsList";
import RestaurantsListFilters from "./RestaurantsListFilters";

const RestaurantsHome = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4415822&lng=78.3754448&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      setRestaurants(data.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <section>
          <BannerItems bannerCards={restaurants?.cards?.[0]?.card?.card} />
        </section>
        <section>
          <TopRestaurants topResCards={restaurants?.cards?.[1]?.card?.card} />
        </section>
        <section>
          <RestaurantsListFilters
            resListHeader={restaurants?.cards?.[2]?.card?.card}
            resListFilters={restaurants?.cards?.[3]?.card?.card}
          />
        </section>
        <section>
          <RestaurantsList resList={restaurants?.cards?.[4]?.card?.card} />
        </section>
      </div>
    </div>
  );
};

export default RestaurantsHome;
