import Lottie from "lottie-react";
import cart from "@assets/lottieFiles/cart.json";
import loading from "@assets/lottieFiles/loading.json";
import notFound from "@assets/lottieFiles/notFound.json";
import wishlist from "@assets/lottieFiles/wishlist.json";
import empty from "@assets/lottieFiles/empty.json";
import error from "@assets/lottieFiles/error.json";

const lottieFilesMap = {
  cart,
  loading,
  notFound,
  wishlist,
  empty,
  error,
};

type LottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
};

const LottieHandler = ({ type, message }: LottieHandlerProps) => {
  const lottieType = lottieFilesMap[type];
  return (
    <div className="text-secondary text-center font-semibold">
      <Lottie animationData={lottieType} className="relative h-[500px]" />
      {message && (
        <h3 className={`text-4xl mb-10 ${type === "error" ? "text-red" : ""}`}>
          {message}
        </h3>
      )}
    </div>
  );
};

export default LottieHandler;
