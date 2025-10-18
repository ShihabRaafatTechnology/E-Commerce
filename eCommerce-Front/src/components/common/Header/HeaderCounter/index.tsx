import useHeaderCounter from "@hooks/useHeaderCounter";
import { useNavigate } from "react-router-dom";

type THeaderCounter = {
    totalQuantity?: number;
    page: string;
    svgIcon: React.ReactNode;
}

const HeaderCounter = ({totalQuantity = 0, page, svgIcon}: THeaderCounter) => {
    const navigate = useNavigate();
    const animate = useHeaderCounter(totalQuantity);
    return (
        <div className="relative cursor-pointer mx-5" onClick={() => navigate(page)}>
            {svgIcon}
            {totalQuantity > 0 && <div
                className={
                    animate
                        ? "animate-ping absolute backdrop-blur-lg rounded-full text-xs w-5 h-5 top-[-10px] right-[-5px] flex justify-center items-start text-secondary border border-primary"
                        : "absolute backdrop-blur-lg rounded-full text-xs w-5 h-5 top-[-10px] right-[-5px] flex justify-center items-start text-secondary border border-primary"
                }
            >
                {totalQuantity}
            </div>}
        </div>
    );
}

export default HeaderCounter