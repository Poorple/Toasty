import React from "react";
import { Link } from "react-router-dom";

const MeasurementSection = () => {
  return (
    <section>
      <article>
        <p>
          The recipes have been standardized to the metric system for
          consistency and precision in measurements.
        </p>
      </article>
      <article>
        <p>
          Transitioning to the metric system ensures accuracy, facilitating ease
          of replication and understanding across diverse culinary contexts.
        </p>
      </article>
      <article>
        <p>
          Embracing metric measurements enhances accessibility for a global
          audience, promoting culinary excellence worldwide.
        </p>
      </article>
      <Link to={`/measurement`}>
        <button>Learn more</button>
      </Link>
    </section>
  );
};

export default MeasurementSection;
