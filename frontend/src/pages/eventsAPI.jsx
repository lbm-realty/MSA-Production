import Logout from "../components/logout";
import CreateAPI from "../components/createAPI";
import DeleteAPI from "../components/deleteAPI";
import UpdateAPI from "../components/updateAPI";
import "../css/eventsApi.css";

const EventsAPI = () => {
    const token = localStorage.getItem("accessToken");

    return token ? (
        <div className="events-outer">
        <Logout />
        <div className="events-form-container">
        <CreateAPI />
        <div className="separator"></div>
        <DeleteAPI />
        <div className="separator"></div>
        <UpdateAPI />
        </div>
        </div>
    ) : (
        <div className="events-outer-forbid">
          <div className="text-container">
            <h1>For Admin Use Only</h1>
            <h3>
              You're not authorized to access this page. Please login if you're an
              admin/officer. You may leave otherwise.
            </h3>
            <button
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Go to Login
            </button>
          </div>
        </div>
      );
}

export default EventsAPI;