import "../css/apis.css";
import Logout from "../components/logout";

const APIs = () => {
  return (
    <div className="apis-outer">
      <Logout />
      <div className="apis-inner">
        <h2>Edit Events</h2>
        <button
          onClick={() => {
            window.location.href = "/addEvents";
          }}
        >
          Go to events
        </button>
        <h2>Edit Prayer Times</h2>
        <button
          onClick={() => {
            window.location.href = "/addPrayers";
          }}
        >
          Go to prayer hours
        </button>
      </div>
      <div className="api-links">
      </div>
    </div>
  );
};

export default APIs;
