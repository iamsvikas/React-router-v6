import React from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { eventId } = useParams();
  return (
    <>
      <h1>EventDetail</h1>

      <p>{eventId}</p>
    </>
  );
};

export default EventDetail;
