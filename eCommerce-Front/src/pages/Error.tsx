import { LottieHandler } from "@components/feedback";
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <LottieHandler type="notFound"/>
      <button className="bottom-20 absolute">
        <a className="relative inline-block text-sm font-medium text-btn-secondary group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-btn-secondary group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <Link to="/" replace={true}>
            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              Go Home
            </span>
          </Link>
        </a>
      </button>
    </main>
  );
};

export default Error;
