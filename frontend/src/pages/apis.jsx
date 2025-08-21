import "../css/apis.css";
import Logout from "../components/logout";

const APIs = () => {
  return (
    <div className="apis-outer">
      <Logout />
      <div className="apis-inner">
        <h2>Edit Events</h2>
        <button
          className="text-black"
          onClick={() => {
            window.location.href = "/addEvents";
          }}
        >
          Go to events
        </button>
        <h2>Add Newsletter</h2>
        <button
          className="text-black"
          onClick={() => {
            window.location.href = "/addNewsletter";
          }}
        >
          Add newsletter
        </button>
        <h2>Add Donation Project</h2>
        <button
          className="text-black"
          onClick={() => {
            window.location.href = "/add-donation-project";
          }}
        >
          Go to Donation Projects
        </button>
        <h2>Edit Prayer Times</h2>
        <button
          className="text-black"
          onClick={() => {
            window.location.href = "/addPrayers";
          }}
        >
          Go to prayer hours
        </button>
        <h2>Edit Merch</h2>
        <button
          className="text-black"
          onClick={() => {
            window.location.href = "/edit-merch";
          }}
        >
          Go to All Merch
        </button>
      </div>
      <div className="api-links">
      </div>
    </div>
  );
};

export default APIs;
