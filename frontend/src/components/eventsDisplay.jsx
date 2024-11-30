import React, { useState } from "react";
import "../css/eventDisplay.css";
import archiveEvents from "./archiveEvents";
import upcomingEvents from "./upcomingEvents";

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// const ArrowIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <line x1="5" y1="12" x2="19" y2="12"></line>
//     <polyline points="12 5 19 12 12 19"></polyline>
//   </svg>
// );

function EventDisplay() {
  const [isArchiveOpen, setArchiveOpen] = useState();
  const [ishovered, setHovered] = useState();

  const toggleArchive = () => {
    setArchiveOpen(!isArchiveOpen);
  };

  const toggleHover = () => {
    setArchiveOpen(!isArchiveOpen);
    setHovered(!ishovered);
  };
  return (
    <div className="whole-container">
      <div className="event-wrapper">
        <h3 className="upcoming-events-heading">UPCOMING EVENTS</h3>
        <div className="event-container">
          {upcomingEvents.map((event, index) => (
            <>
              <div className="event-card">
                <div className="event-content">
                  {/* Date Box */}
                  <div className="date-box">
                    <div className="date-month">{event.date.month}</div>
                    <div className="date-day">{event.date.day}</div>
                  </div>

                  {/* Content */}
                  <div className="event-details">
                    <h2 className="event-title">{event.title}</h2>

                    <div className="event-meta">
                      <CalendarIcon />
                      <span>{event.timeRange}</span>
                    </div>

                    <div className="event-meta">
                      <LocationIcon />
                      <span>{event.location}</span>
                    </div>

                    <p className="event-description">{event.description}</p>
                    <p className="event-venue">{event.venue}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="archive-event-container">
        <div className="archive-section">
          {window.width > "600px" ? (
            <button onClick={toggleArchive} className="archive-toggle-button">
              {isArchiveOpen ? "Past Events" : "Past Events"}
            </button>
          ) : (
            <button onClick={toggleHover} className="archive-toggle-button">
              {isArchiveOpen ? "Past Events" : "Past Events"}
            </button>
          )}
          <div className="adjusting-border"></div>
          <div
            className={`archive-content ${isArchiveOpen ? "open" : "closed"}`}
          >
            {archiveEvents.map((event, index) => (
              <>
                <div key={index} className="event-container-2">
                  <div className="event-card-2">
                    <div className="event-content-2">
                      {/* Date Box */}
                      <div className="first-row">
                        <div className="date-box-2">
                          <div className="date-month">{event.date.month}</div>
                          <div className="date-day">{event.date.day}</div>
                        </div>

                        {/* Content */}
                        <h2 className="event-title-2">{event.title}</h2>
                        <div className="closed-box">CLOSED</div>
                      </div>
                      <div className="second-row">
                      <div className="event-details">
                        <div className="event-meta">
                          <CalendarIcon />
                          <span>{event.timeRange}</span>
                        </div>
                        <div className="event-meta">
                          <LocationIcon />
                          <span>{event.location}</span>
                        </div>

                        <p className="event-description">{event.description}</p>
                        <p className="event-venue">{event.venue}</p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDisplay;
