import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "../BookSession.css";
import { useNavigate } from "react-router-dom";

const BookSession = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  return (
    <div className="w-5/6 mx-auto mt-10">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-center text-2xl"> Select a Date</h1>
        <div className="calendar-container">
          <Calendar
            onChange={setDate}
            value={date}
            minDate={new Date()}
            className="p-10"
          />
        </div>
        <p className="text-center">
          <span className="text-xl">Selected Date:</span> {date.toDateString()}
        </p>
      </div>
      <div className="mt-5 mb-5 text-center">
        <Button variant="contained" color="primary" onSubmit={()=>navigate('/thankyou')}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default BookSession;
