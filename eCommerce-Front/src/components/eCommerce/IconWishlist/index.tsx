import useIconWishlist from "@hooks/useIconWishlist";
import { LuClipboardList } from "react-icons/lu";

const IconWishlist = () => {
  const { animate, totalItems, navigate } = useIconWishlist();
  return (
    <div className="relative cursor-pointer" onClick={() => navigate("/wishlist")}>
      <LuClipboardList className="text-primary text-[30px] md:text-[40px]" />
      {totalItems.length > 0 && <div
        className={
          animate
            ? "animate-ping absolute backdrop-blur-lg rounded-full w-1 h-1 text-xs md:w-5 md:h-5 top-[-10px] right-[-12px] p-3 flex justify-center items-center text-secondary"
            : "absolute backdrop-blur-lg rounded-full w-1 h-1 text-xs md:w-5 md:h-5 top-[-10px] right-[-12px] p-3 flex justify-center items-center text-secondary"
        }
      >
        {totalItems.length}
      </div>}
    </div>
  );
};

export default IconWishlist;


