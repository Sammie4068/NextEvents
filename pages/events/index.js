import { Fragment } from "react";

import EventList from "../../components/events/Event-list";
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";
import Router, { useRouter } from "next/router";

function AllEventsPage() {
  const events = getAllEvents();
  useRouter()

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    Router.push(fullPath)
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
