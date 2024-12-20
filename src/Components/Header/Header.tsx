import { useCallback, useEffect, useState } from "react";
import { logo, icon1, icon2, icon4 } from "../../assets/icons/index.ts";
import NavMenu from "./NavMenu.tsx";
import MobileMenu from "./MobileMenu.tsx";
import { MenuOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { fetchCountryCode } from "../../services/apiServices.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { useQuery } from "@tanstack/react-query";
import { setCountry, setPhone } from "../../store/features/countrySlice.ts";
import {
  getCounteriesArr,
  getDialingCodeByCountry,
} from "../../utils/common.ts";

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  const dispatch = useDispatch();

  const contactUs = useSelector((state: RootState) => state.contactus.data);
  getCounteriesArr();
  const fetchLocationAndCountry = async () => {
    return new Promise<{ lat: number; lng: number }>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ lat: latitude, lng: longitude });
        },
        (error) => reject(error),
        { enableHighAccuracy: true }
      );
    });
  };

  const query = useQuery({
    queryKey: ["countryCode"],
    queryFn: async () => {
      try {
        const { lat, lng } = await fetchLocationAndCountry();
        const countryCode = await fetchCountryCode(lat, lng);
        return countryCode;
      } catch (error) {
        console.error("Error fetching country code:", error);
        return null;
      }
    },
    enabled: false,
  });

  const dispatchCuntary = useCallback(async () => {
    if (query.data) {
      dispatch(setCountry(query.data as string));
      const counteryCode = await getDialingCodeByCountry(query.data);

      const selectedPhone = contactUs?.phones?.find((phone) => {
        return phone.startsWith(`+${counteryCode}`);
      });

      dispatch(setPhone(selectedPhone || contactUs?.phones[0]));
    }
  }, [dispatch, query.data]);

  useEffect(() => {
    if (query.data) {
      dispatchCuntary();
    }
  }, [query.data, dispatchCuntary]);

  useEffect(() => {
    fetchLocationAndCountry()
      .then(() => {
        query?.refetch();
      })
      .catch((error) => {
        console.error("Error getting location:", error);
      });
  }, [query]);

  if (query.isError) {
    return <p>Error fetching country data.</p>;
  }

  const { phone } = useSelector((state: RootState) => state.country);


  const [scrolled, setScrolled] = useState<boolean>(false);
  const [headerHide, setHeaderHide] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHeaderHide(true)
        if (window.scrollY > 280) {
          setScrolled(true);
          setHeaderHide(false)
        }
      } else {
        setScrolled(false);
        setHeaderHide(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative before:absolute before:left-0 before:top-0 before:w-full before:h-[calc(100%_+_40px)] before:bg-[#F5F5F6]">
        <div className="py-4 md:py-0 relative">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <ul className="flex items-center gap-4 xs:gap-8">
                <li>
                  <button className="text-text1 duration-300 text-xs xs:text-sm flex items-center gap-4 ">
                    <span className="md:flex items-center justify-center px-2.5 py-2 h-14 bg-primary hidden ">
                      <img src={icon1} className="w-5" />
                    </span>{" "}
                    {phone || "+91-8779043458"}
                  </button>
                </li>
                <li>
                  <button className="text-text1 duration-300 text-xs xs:text-sm flex items-center gap-4 ">
                    <span className="md:flex items-center justify-center px-2.5 py-2 h-14 bg-primary hidden ">
                      <img src={icon2} className="w-5" />
                    </span>{" "}
                    {contactUs?.emails[0] || "support@mexxiss.com"}
                  </button>
                </li>
              </ul>
              <ul className="flex items-center gap-8">
                {/* <li className="hidden sm:block">
                <button className="text-text1 duration-300 text-sm flex items-center gap-2">
                  <span>
                    <img src={icon3} className="w-5" />
                  </span>{" "}
                  Translate
                </button>
              </li> */}
                <li>
                  <Link
                    to="/login"
                    className="text-text1 duration-300 text-xs xs:text-sm flex items-center gap-1 xs:gap-2"
                  >
                    <span>
                      <img src={icon4} className="w-4 xs:w-5" />
                    </span>{" "}
                    Log in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* main header */}
      <div className={`duration-300 header z-50 bg-white sm:bg-transparent shadow-[0px_2px_15px_0px_#0000001A] sm:shadow-none ${scrolled ? "sticky top-0 !translate-y-0 !shadow-[0px_2px_15px_0px_#0000001A] !bg-white" : "relative"} ${headerHide && "-translate-y-full"}`}>
        <div className="container mx-auto">
          <div className={`flex items-center justify-between sm:bg-white sm:shadow-[0px_2px_15px_0px_#0000001A] sm:px-4 md:px-6 sm:md-8 py-3.5 rounded-b-xl rounded-tr-xl ${scrolled ? "!bg-transparent !shadow-none" : ""}`}>
            <div className="flex items-center gap-3">
              <button className="xl:hidden" onClick={() => setMenuShow(true)}>
                <MenuOutlined className="!text-2xl sm:!text-3xl md:!text-4xl text-text2" />
              </button>
              <Link to="/" className="logo">
                <img
                  src={logo}
                  className="max-w-[80px] sm:max-w-[120px] 2xl:max-w-[150px]"
                />
              </Link>
            </div>
            <div>
              <NavMenu />
            </div>
            <div>
              <Link to="/booking/home" className="btn1 flex items-center ">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu menuShow={menuShow} setMenuShow={setMenuShow} />
    </>
  );
};

export default Header;
