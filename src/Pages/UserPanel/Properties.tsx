import { CheckCircle } from "@mui/icons-material";
import img1 from "../../assets/images/img1.png";
import { Link } from "react-router-dom";
const Properties = () => {
  return (
    <div>
      <div className='grid grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 xs:gap-5'>
        {Array(5).fill(0).map((e, index) => (
          <div key={index} className="border border-primary flex flex-col gap-2 sm:gap-4 relative">
            <Link
              to="/user-panel/calender/10"
              className="absolute w-full h-full"
            ></Link>
            <div className="">
              <img src={img1} className="w-full h-full object-cover" />
            </div>
            <div className="w-full">
              <div className="px-2 pb-2 sm:pb-4 w-full">
                <div>
                  <h6 className="sm:text-lg md:text-xl text-gray-800 w-[calc(100%_-_10px)] text-nowrap overflow-hidden text-ellipsis">
                    My New Property
                  </h6>
                </div>
                <hr className="w-full my-2 sm:my-3 border-primary border-opacity-50" />
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm tracking-wide">
                    Studio
                  </span>
                  <div className="text-sm flex items-center gap-1 text-primary">
                    <CheckCircle className="!text-lg" />
                    Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
