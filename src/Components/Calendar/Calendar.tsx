import { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box } from "@mui/material";
import { DateSelectArg, EventClickArg, EventApi } from "@fullcalendar/core";
import { ModifiedDate } from "../../utils/common";
import "./Calendar.css"

interface CalendarProps {
  dynamicDate: any;
  setDynamicDate: (value: any) => void;
  resultdata?: ModifiedDate[];
}

const Calendar: React.FC<CalendarProps> = ({
  dynamicDate,
  setDynamicDate,
  resultdata = [],
}) => {
  const calendarRef = useRef<any>(null);
  // const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  console.log(resultdata);

  const handleYearChange = (increment: number) => {
    setCurrentYear((prevYear) => prevYear + increment);
    const calendarApi = calendarRef.current.getApi();
    increment > 0 ? calendarApi.nextYear() : calendarApi.prevYear();
    setDynamicDate(new Date(calendarApi.getDate()));
  };

  const handleToday = () => {
    setCurrentYear(new Date().getFullYear());
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
    setDynamicDate(new Date(calendarApi.getDate()));
  };

  const handleNavigation = (direction: 'prev' | 'next') => {
    const calendarApi = calendarRef.current.getApi();
    direction === 'prev' ? calendarApi.prev() : calendarApi.next();
    setDynamicDate(new Date(calendarApi.getDate()));
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            ref={calendarRef}
            initialDate={dynamicDate.toISOString()}
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "prevYear,year,nextYear",
            }}
            customButtons={{
              prevYear: { text: "<<", click: () => handleYearChange(-1) },
              year: { text: `${currentYear}` },
              nextYear: { text: ">>", click: () => handleYearChange(1) },
              today: { text: "today", click: handleToday },
              prev: { text: "<", click: () => handleNavigation('prev') },
              next: { text: ">", click: () => handleNavigation('next') },
            }}
            initialView="dayGridMonth"
            editable={true}
            selectMirror={true}
            dayMaxEvents={true}
            eventDisplay="block" // Ensure events are displayed as bars
            eventClassNames="custom-event" // Add a custom class to events
            events={resultdata.map(event => ({
              ...event,
              display: 'block', // Ensure each event is displayed as a block
              title: `${event.source} | ${event.guest_name} ` // Display guest_name and source
            }))}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
