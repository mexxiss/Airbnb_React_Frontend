import { Dispatch, SetStateAction } from "react";
import { IGallaryTypesData } from "../../types/gallaryTabTypes";

interface Props {
  finalTypesData: IGallaryTypesData[];
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
  setIsKey: Dispatch<SetStateAction<string>>;
}

const GalleryFilters = ({
  finalTypesData,
  isActive,
  setIsActive,
  setIsKey,
}: Props) => (
  <div className="mt-12">
    <ul className="flex overflow-auto justify-between items-center border-b-2 border-[#AEAEAE]">
      {finalTypesData?.map((item) => (
        <li key={item._id}>
          <button
            className={`px-8 py-1 text-nowrap text-center capitalize md:text-lg ${
              isActive === item._id
                ? "border-b-[3.5px] border-[#DCC397] font-medium text-[#DCC397]"
                : "text-[#1F1607] font-normal"
            }`}
            onClick={() => {
              setIsActive(item._id);
              setIsKey(item.name);
            }}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default GalleryFilters;
