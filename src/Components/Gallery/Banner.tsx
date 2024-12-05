import { Link } from "react-router-dom";
import { icon27 } from "../../assets/icons";
import { bg1 } from "../../assets/images";

const Banner = () => (
  <div
    className="pt-20 sm:pt-28 pb-10 sm:pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
    style={{
      backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
    }}
  >
    <div className="container mx-auto">
      <div className="flex items-center justify-center flex-col gap-4">
        <h2 className="text-[42px] sm:text-5xl font-bold text-center text-[#1F1607] font-light]">
          Gallery
        </h2>
        <p className="flex items-center gap-4 text-[#4C360E]">
          <span>
            <Link
              to="/"
              className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
            >
              Home
            </Link>
          </span>
          <span>
            <img src={icon27} className="w-4" />
          </span>
          <span>Gallery</span>
        </p>
      </div>
    </div>
  </div>
);

export default Banner;
