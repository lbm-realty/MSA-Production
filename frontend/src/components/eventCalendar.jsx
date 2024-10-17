import { useCallback, useEffect, useState } from "react";
import "../css/eventCalendar.css";

function EventCalendar() {
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

    const monthNameToNum = (monthname) => {
    var month = months.indexOf(monthname);
    return month ? month : 0;
  }

  const monthNumToName = (monthNum) => {
    return months[monthNum];
  };

  const renderCalendar = useCallback((date) => {
    const events = {
      "2024-08-28": "GBM",
      "2024-09-06": "Masjid Cleanup at 3 PM & Chai Night",
      "2024-09-07": "Park Kickoff at 3 PM",
      "2024-09-08": "Memorization Goal",
      "2024-09-13": "Chai Night",
      "2024-09-14":
        "Sisters' Paint Rock Coffee Meet & Mingle at 3:30 PM, Brothers' Pool Party at 5 PM",
      "2024-09-20": "Imam Anwar Chai Night",
      "2024-09-26": "South Plains Fair College Night",
      "2024-09-27": "Challenge Chai Night",
      "2024-10-01": "1st Fiqh Session",
      "2024-10-04": "Chai Night",
      "2024-10-05":
        "Sisters' Cooking with a Chef at 2 PM, Brothers' Field Day at 5 PM",
      "2024-10-10": "Seerah Trivia Night after Maghreb",
      "2024-10-12": "Culture Fest, MSA Carnival at 5 PM",
      "2024-10-18": "Alumni Dinner, Alumni join us for Chai Night!!",
      "2024-10-19": "Alumni Tailgate",
      "2024-10-21": "MSA Charity Week Tabling from 11 AM - 2 PM",
      "2024-10-22": "MSA Charity Week Tabling from 1 PM - 4 PM",
      "2024-10-23": "Giveback",
      "2024-10-24": "Brothers' Charity Soccer Tournament",
      "2024-10-25": "Bake Sale at 3 PM, Charity Chai, Halaqa, & Challenge Night",
      "2024-10-26":
        "Brothers' Charity UFC Watch Along, Sisters' Charity Movie Night",
      "2024-10-27": "Sisters' Charity Pilates",
      "2024-10-31": "Seerah Trivia Night after Maghreb",
    };
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const totalDaysInMonth = lastDayOfMonth.getDate();
  
    const daysArray = [];
    for (let noDay = 0; noDay < firstDayOfWeek; noDay++) {
      daysArray.push({ day: " ", events: [] });
    }
  
    for (let day = 1; day <= totalDaysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateString = date.toISOString().split('T')[0];
      const eventString = events[dateString] ? events[dateString] : "";
      daysArray.push({ day, events: eventString });
    }
  
    setDays(daysArray);
  }, []); 
  
  useEffect(() => {
    renderCalendar(currentDate);
  }, [currentDate, renderCalendar]);

  // function renderCalendar(date) {
  //   const year = date.getFullYear();
  //   const month = date.getMonth();
  //   const firstDayOfMonth = new Date(year, month, 1);
  //   const lastDayOfMonth = new Date(year, month + 1, 0);
  //   const firstDayOfWeek = firstDayOfMonth.getDay();
  //   const totalDaysInMonth = lastDayOfMonth.getDate();

  //   const daysArray = [];
  //   for (let noDay = 0; noDay < firstDayOfWeek; noDay++) {
  //     daysArray.push({ day: " ", events: [] });
  //   }

  //   for (let day = 1; day <= totalDaysInMonth; day++) {
  //     const date = new Date(year, month, day);
  //     const dateString = date.toISOString().split('T')[0];
  //     const eventString = events[dateString] ? events[dateString] : "";
  //     daysArray.push({ day, events: eventString });
  //   }

  //   setDays(daysArray);
  // }

  const prevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      renderCalendar(newDate);
      return newDate;
    });
  };

  const nextMonth = () => {
    setCurrentDate((nextDate) => {
      const newDate = new Date(nextDate);
      newDate.setMonth(nextDate.getMonth() + 1);
      renderCalendar(newDate);
      return newDate;
    });
  };

    const monthChange = document.querySelectorAll(".month");
    monthChange.forEach(month => {
      month.addEventListener('click', function() {
        setCurrentDate(prevDate => {
          const newMonth = new Date(prevDate);
          console.log(newMonth);
          newMonth.setMonth(monthNameToNum(month.textContent));
          console.log(`Month: ${month.textContent}`);
          console.log(`New Month: ${newMonth}`);
          return newMonth
        })
      })
    })

    const yearChange = document.querySelectorAll('.year');
    yearChange.forEach(year => {
      year.addEventListener('click', function() {
        setCurrentDate(prevDate => {
          const newYear = new Date(prevDate);
          newYear.setFullYear(year.textContent);
          return newYear;
        })
      })
    })

  return ( 
    <>
      <div className="container">
        <h4>Join us for our Events!</h4>
        <div className="calendar-container">
          <div className="calendar-header">
            <button onClick={prevMonth} id="prev-month">
              Previous
            </button>
            <div className="dropdown-container">
              <div className="dropdown-1">
                <button className="dropbtn-1">
                  <h2 id="month-month">
                    {monthNumToName(currentDate.getMonth())}
                  </h2>
                </button>
                <div
                  id="dropdown-content-months"
                  className="dropdown-content-months"
                >
                  {months.map((monthName, index) => (
                    <h3 key={index} className="month">
                      {monthName}
                    </h3>
                  ))}
                </div>
              </div>
              <div className="dropdown-2">
                <button className="dropbtn-2">
                  <h2 id="year">{currentDate.getFullYear()}</h2>
                </button>
                <div
                  id="dropdown-content-years"
                  className="dropdown-content-years"
                >
                  {[...Array(11).keys()].map((year) => (
                    <h3 key={2020 + year} className="year">
                      {2020 + year}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={nextMonth} id="next-month">
              Next
            </button>
          </div>
          <div className="calendar-grid">
            <div className="calendar-day-name">Sun</div>
            <div className="calendar-day-name">Mon</div>
            <div className="calendar-day-name">Tue</div>
            <div className="calendar-day-name">Wed</div>
            <div className="calendar-day-name">Thu</div>
            <div className="calendar-day-name">Fri</div>
            <div className="calendar-day-name">Sat</div>
          </div>
          <div className="calendar-days-div">
            {days.map((dayObj, index) => (
              <div key={index} className="calendar-days">
                <div>{dayObj.day}</div>
                {dayObj.events && dayObj.events.length > 0 && (
                  <div className="event-item">{dayObj.events}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCalendar;
