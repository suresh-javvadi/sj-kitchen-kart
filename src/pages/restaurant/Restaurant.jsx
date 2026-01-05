import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RestaurantMenu from "./RestaurantMenu";
import TopPicks from "./TopPicks";
import { fetchViaProxy } from "../../utils/api";

const Restaurant = () => {
  const { id } = useParams();
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, [id]);

  const fetchRestaurantData = async () => {
    try {
      const swiggyMenuAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4415822&lng=78.3754448&restaurantId=${id}`;

      const data = await fetchViaProxy(swiggyMenuAPI);
      setResData(data?.data ?? {});
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const regularCards =
    resData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const topPickItems = regularCards.filter(
    (menu) =>
      menu.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
  );

  const itemCategories = regularCards.filter(
    (menu) =>
      menu.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="mx-25">
      <h1 className="text-3xl font-bold my-6">
        {resData?.cards?.[0]?.card?.card?.text}
      </h1>

      {topPickItems.length > 0 && (
        <div className="mb-10">
          <TopPicks topPickItems={topPickItems} />
        </div>
      )}

      {itemCategories.length > 0 && (
        <div>
          <RestaurantMenu resMenu={itemCategories} />
        </div>
      )}
    </div>
  );
};

export default Restaurant;
