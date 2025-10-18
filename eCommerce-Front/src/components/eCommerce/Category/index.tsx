import { TCategory } from "@types";
import { Link } from "react-router-dom";

const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <div className="max-w-sm shadow-lg shadow-gray-800 rounded-lg text-center">
      <img className="rounded-t-lg w-[25rem] h-[15rem]" src={img} alt="category" />
      <div className="p-5">
        <h5 className="mb-2 text-md uppercase merriweather-light poppins-bold tracking-tight text-secondary darumadrop-one-regular">
          {title}
        </h5>
        <p className="font-normal uppercase text-md merriweather-black tracking-wider mb-7 alfa-slab-one-regular text-primary">
          {prefix}
        </p>
        <Link to={`products/${prefix}`} className="inline-flex items-center">
          <p className="bg-btn-secondary text-white merriweather-bold text-md w-[150px] py-2 rounded-full tracking-widest transition-all duration-300 before:ease relative overflow-hidden border border-btn-secondary shadow-2xl before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-secondary before:duration-300 hover:border-secondary hover:text-white hover:shadow-secondary hover:before:h-64 hover:before:-translate-y-32">
            <span className="relative z-10">Show Products</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Category;
