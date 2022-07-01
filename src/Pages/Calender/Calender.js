import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Calender = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    return (

        <div className="flex justify-center bg-[#F9F8F3] px-20 py-10">
            <Calendar
              value={selectedDay}
              onChange={setSelectedDay}
              shouldHighlightWeekends
            />
        </div>

    );
};

export default Calender;