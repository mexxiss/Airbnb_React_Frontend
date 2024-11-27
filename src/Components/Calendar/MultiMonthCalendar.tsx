import React, { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import multiMonthPlugin from "@fullcalendar/multimonth";
import { mockOccupancyData } from "../../utils/mock/mock";

interface MultiMonthCalendarProps {
  monthsToShow?: number;
  nextMonthStartDateProps: Date;
}

const MultiMonthCalendar: React.FC<MultiMonthCalendarProps> = ({
  monthsToShow = 3,
  nextMonthStartDateProps,
}) => {
  const calendarRef = useRef<any>(null);

  const nextMonthStartDate = new Date(nextMonthStartDateProps);
  nextMonthStartDate.setMonth(nextMonthStartDate.getMonth() + 1, 1);

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const currentVisibleDate = calendarApi.getDate();
      if (currentVisibleDate.getTime() !== nextMonthStartDate.getTime()) {
        calendarApi.gotoDate(nextMonthStartDate);
      }
    }
  }, [nextMonthStartDate]);

  return (
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
  );
};

export default MultiMonthCalendar;
