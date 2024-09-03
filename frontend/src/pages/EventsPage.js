import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  if (data.isError) return <p>{data.message}</p>;
  const fetchedEvents = data.events;
  return (
    <>
      <EventsList events={fetchedEvents} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "could not fetched the data!😔" };
    // throw { message: "Could not fetch the events😭" };
    // throw new Response(
    //   JSON.stringify({ message: "could not fetch the events!" }),
    //   { status: 500 }
    // );
    throw json({ message: "could not fetch the events!" }, { status: 500 });
  } else {
    // const response = await response.json();
    return response;
  }
}
