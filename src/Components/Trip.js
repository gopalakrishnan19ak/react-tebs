import Tripdata from "./Tripdata";
import "./Tripstyles.css";
import Trip1 from "../assets/1.jpg";
import Trip2 from "../assets/2.jpg";
import Trip3 from "../assets/4.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Popular Tours </p>
      <div className="tripcard">
        <Tripdata
          image={Trip1}
          heading="Mountain hiking"
          text="We're here for look even you from start to finish.It is almost impossible to read the news without coming across a lead story elections through fake social media accounts."
        />
        <Tripdata
          image={Trip2}
          heading="Mountain hiking"
          text="We're here for look even you from start to finish.It is almost impossible to read the news without coming across a lead story elections through fake social media accounts."
        />
        <Tripdata
          image={Trip3}
          heading="Mountain hiking"
          text="We're here for look even you from start to finish.It is almost impossible to read the news without coming across a lead story elections through fake social media accounts."
        />
      </div>
    </div>
  );
}

export default Trip;
