import { useState } from "react";
import Calendar from "../../Components/Calendar/Calendar";
import MultiMonthCalendar from "../../Components/Calendar/MultiMonthCalendar";
import { makeMonthStr } from "../../utils/common";

const Calender = () => {
  const [dynamicDate, setDynamicDate] = useState<Date>(new Date());

  return (
    <div>
      <div>
        <div>
          <Calendar dynamicDate={dynamicDate} setDynamicDate={setDynamicDate} />
        </div>
        <div className="flex items-end gap-6 my-10">
          <p className="text-5xl text-gray-400">Future Occupancy</p>
          <div className="flex items-center gap-6 ">
            <span className="inline-block py-1 px-4 text-sm tracking-wider text-white bg-primary bg-opacity-50 rounded-full uppercase">
              Occupied
            </span>
            <span className="inline-block py-1 px-4 text-sm tracking-wider text-gray-500 border border-gray-500 rounded-full uppercase">
              Avaiable
            </span>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <MultiMonthCalendar nextMonthStartDateProps={dynamicDate} />
          </div>
          <div>
            <div className="text-center text-white text-sm tracking-wider bg-primary py-2 uppercase">
              Details {makeMonthStr(dynamicDate)}
            </div>
            <ul className="mt-2 flex flex-col gap-2 text-sm text-gray-500">
              <li className="flex items-center justify-between">
                <span>Projected Earnings:</span>
                <span>AED 0.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Average Nighty Rate:</span>
                <span>AED 0</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Stays:</span>
                <span>0</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Nights:</span>
                <span>0</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Occupancy Rate:</span>
                <span>0%</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-5xl text-gray-400">Occupancy Rate</p>
        </div>
        <hr className="my-5" />
      </div>
    </div>
  );
};

export default Calender;
