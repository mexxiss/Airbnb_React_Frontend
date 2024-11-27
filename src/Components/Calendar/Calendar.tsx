import { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box } from "@mui/material";
import { DateSelectArg, EventClickArg, EventApi } from "@fullcalendar/core";

const Calendar: React.FC = () => {
  const calendarRef = useRef<any>(null);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  const handleDateClick = (selected: DateSelectArg | any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected?.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  const handlePrevYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prevYear();
  };

  const handleNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.nextYear();
  };

  const handleToday = () => {
    const currentYear = new Date().getFullYear();
    setCurrentYear(currentYear);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            ref={calendarRef}
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "prevYear,year,nextYear",
            }}
            customButtons={{
              prevYear: {
                text: "<<",
                click: handlePrevYear,
              },
              year: {
                text: `${currentYear}`,
              },
              nextYear: {
                text: ">>",
                click: handleNextYear,
              },
              today: {
                text: "today",
                click: handleToday,
              },
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
