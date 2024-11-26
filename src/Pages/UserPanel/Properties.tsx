import { CheckCircle, KeyboardArrowRightOutlined } from "@mui/icons-material";
import img1 from "../../assets/images/img1.png";
import { Link } from "react-router-dom";
const Properties = () => {
  return (
    <div>
      <div>
        <div className="border border-primary flex gap-4 relative">
          <Link
            to="/user-panel/calender/10"
            className="absolute w-full h-full"
          ></Link>
          <div className="min-w-28 w-28 h-28">
            <img src={img1} className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-between gap-4 w-full">
            <div className="py-2 w-full">
              <div>
                <h6 className="text-xl text-gray-800">My New Property</h6>
              </div>
              <hr className="w-full my-3 border-primary border-opacity-50" />
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
            <div className="w-6 text-white bg-primary flex items-center justify-center">
              <KeyboardArrowRightOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
