import React, { useState } from 'react'

import { DtCalendar } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'

const Calender = () => {
    const [date, setDate] = useState(null)
    return (
        <div className='flex justify-center py-10 bg-[#F9F8F3]'>
            <div>
                <DtCalendar onChange={setDate} />
            </div>
        </div>
    );
};

export default Calender;