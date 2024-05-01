import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/Event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilterEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <div className="center">
        <h1>Loading...</h1>
      </div>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  console.log(numYear, numMonth);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) | (numYear > 2030) ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter! Please adjust your value</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events"> Show all Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({year: numYear, month: numMonth})

  if(!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events find for the filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events"> Show all Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <Fragment>
    <ResultsTitle date={date}/>
     <EventList items={filteredEvents}/>
    </Fragment>
  );
}

export default FilterEventsPage;
