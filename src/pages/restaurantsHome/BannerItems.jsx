import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BannerItems = ({ bannerCards }) => {
  if (!bannerCards) return;

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
          <h1>{bannerCards?.header?.title}</h1>
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
        {bannerCards?.imageGridCards?.info?.map((item) => (
          <div key={item?.id} className="flex-shrink-0 text-center w-44">
            <img
              src={
                item?.imageId
                  ? `https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`
                  : ""
              }
              alt={item?.action?.text || "img"}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerItems;
