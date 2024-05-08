import { useEffect, useRef, useState } from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";

const OpeningSection = () => {
  const targetRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <section className="first-section">
      <img className="grains" src="/grains.png" />
      <h2 ref={targetRef} className={`fade-in ${isVisible ? "visible" : ""}`}>
        <span style={{ display: "inline-block" }}>
          EXPERIENCE THE BEAUTIFUL WORLD OF{" "}
        </span>
        <br />
        HOMEMADE BREADMAKING
      </h2>
      <article className="opening-article">
        <p>
          From learning the importance of bread throughout human history to
          creating your own.
        </p>
        <p>Discover it yourself and enjoy the ride!</p>
        <Link to={`/about`}>
          <button>More</button>
        </Link>
      </article>

      <img className="first-loaf" src="/bread-loaf.png" />
    </section>
  );
};

export default OpeningSection;
