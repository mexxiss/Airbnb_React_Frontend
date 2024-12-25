import { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box } from "@mui/material";
import { DateSelectArg, EventClickArg, EventApi } from "@fullcalendar/core";
import { ModifiedDate } from "../../utils/common";
import BookingDetails from "../Modals/BookingDetails"; // Add this line
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
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [openModal, setOpenModal] = useState<boolean>(false); // Add this line
  const [eventDetails, setEventDetails] = useState<any>(null); // Add this line

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

  const handleEventClick = (clickInfo: EventClickArg) => {
    setEventDetails({
      ...clickInfo.event.extendedProps,
      start: clickInfo.event.start,
      end: clickInfo.event.end,
    });
    setOpenModal(true);
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
            droppable={false}
            initialView="dayGridMonth"
            editable={false}
            selectMirror={true}
            dayMaxEvents={false}
            eventDisplay="block"
            eventClassNames="custom-event"
            eventOverlap={true}
            slotEventOverlap={true}
            events={resultdata.map(event => ({
              ...event,
              display: 'block',
              title: `${event.source} | ${event.guest_name} `
            }))}
            eventClick={handleEventClick}
          />
        </Box>
      </Box>
      <BookingDetails openModal={openModal} setOpenModal={setOpenModal} eventDetails={eventDetails} /> {/* Fix this line */}
    </Box>
  );
};

export default Calendar;
