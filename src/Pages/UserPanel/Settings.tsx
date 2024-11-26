import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Link, matchPath, useLocation, useParams } from "react-router-dom";

const Settings = () => {
  const { id } = useParams();
  const location = useLocation();

  console.log({ location });

  const match = matchPath("/settings/:id", `/settings/${id}`);
  console.log({ match });

  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="border border-primary flex justify-between relative">
          <Link
            to="/user-panel/settings/change-password"
            className="absolute w-full h-full"
          ></Link>
          <h6 className="text-xl text-gray-700 py-2.5 pl-3">
            Block Owner Stay
          </h6>
          <div className="w-5 text-white bg-primary flex items-center justify-center">
            <KeyboardArrowRightOutlined />
          </div>
        </div>
        <div className="border border-primary flex justify-between relative">
          <Link
            to="/user-panel/settings/change-password"
            className="absolute w-full h-full"
          ></Link>
          <h6 className="text-xl text-gray-700 py-2.5 pl-3">Change Password</h6>
          <div className="w-5 text-white bg-primary flex items-center justify-center">
            <KeyboardArrowRightOutlined />
          </div>
        </div>
        <div className="border border-primary flex justify-between relative">
          <Link
            to="/user-panel/settings/personal-details"
            className="absolute w-full h-full"
          ></Link>
          <h6 className="text-xl text-gray-700 py-2.5 pl-3">
            My Personal Details
          </h6>
          <div className="w-5 text-white bg-primary flex items-center justify-center">
            <KeyboardArrowRightOutlined />
          </div>
        </div>
        {match?.params?.id && match.params.id !== "undefined" && (
          <div className="border border-primary flex justify-between relative">
            <Link
              to="/user-panel/settings/property-details"
              className="absolute w-full h-full"
            ></Link>
            <h6 className="text-xl text-gray-700 py-2.5 pl-3">
              Property Details
            </h6>
            <div className="w-5 text-white bg-primary flex items-center justify-center">
              <KeyboardArrowRightOutlined />
            </div>
          </div>
        )}

        <div className="border border-primary flex justify-between relative">
          <Link
            to="/user-panel/settings/change-password"
            className="absolute w-full h-full"
          ></Link>
          <h6 className="text-xl text-gray-700 py-2.5 pl-3">Logout</h6>
          <div className="w-5 text-white bg-primary flex items-center justify-center">
            <KeyboardArrowRightOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
