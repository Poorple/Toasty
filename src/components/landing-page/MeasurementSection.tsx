import { Link } from "react-router-dom";
import "../../styles/measurement-sect.css";

const MeasurementSection = () => {
  return (
    <section className="measurement-grid">
      <img src="measuring-flour.jpg" />
      <div className="measurement-content-div">
        <h2>Standardized Units of Measure</h2>
        <p>
          The recipes have been standardized to the metric system for
          consistency and precision in measurements.
        </p>
        <p>
          Transitioning to the metric system ensures accuracy, facilitating ease
          of replication and understanding across diverse culinary contexts.
        </p>
        <p>
          Embracing metric measurements enhances accessibility for a global
          audience, promoting culinary excellence worldwide.
        </p>
        <Link to={`/measurement`}>
          <button>Learn more</button>
        </Link>
      </div>
    </section>
  );
};

export default MeasurementSection;
