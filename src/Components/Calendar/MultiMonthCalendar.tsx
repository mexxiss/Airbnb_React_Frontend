import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import multiMonthPlugin from "@fullcalendar/multimonth";
import { mockOccupancyData } from "../../utils/mock/mock";

interface MultiMonthCalendarProps {
  monthsToShow?: number;
}

const MultiMonthCalendar: React.FC<MultiMonthCalendarProps> = ({
  monthsToShow = 3,
}) => {
  const calendarRef = useRef<any>(null);

  // Calculate the first day of the next month
  const nextMonthStartDate = new Date();
  nextMonthStartDate.setMonth(nextMonthStartDate.getMonth() + 1, 1);

  return (
    <div className="">
      <div className="flex space-x-4 overflow-x-auto">
        <FullCalendar
          ref={calendarRef}
          plugins={[multiMonthPlugin]}
          initialView={`multiMonth${monthsToShow}Month`}
          initialDate={nextMonthStartDate.toISOString()}
          views={{
            [`multiMonth${monthsToShow}Month`]: {
              type: "multiMonth",
              duration: { months: monthsToShow },
            },
          }}
          headerToolbar={false}
          height="auto"
          contentHeight="auto"
          aspectRatio={1.5}
          events={mockOccupancyData}
        />
      </div>
    </div>
  );
};

export default MultiMonthCalendar;
