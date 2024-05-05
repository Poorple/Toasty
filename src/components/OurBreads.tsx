import { useEffect, useRef, useState } from "react";
import breads from "../local-json/bread.json";
import "../styles/our-breads.scss";
import { Link } from "react-router-dom";

const OurBreads = () => {
  let breadsObj = breads.breads;

  const [isVisible, setIsVisible] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationPlayed) {
          setIsVisible(true);
          setAnimationPlayed(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationPlayed]);

  return (
    <section className="bread-sect">
      <h2>Our Breads</h2>
      <div ref={ref} className="bread-div">
        {breadsObj.map((x) => (
          <Link
            to={`/recipe/${x.breadName.toLowerCase().replace(/\s/g, "-")}`}
            key={x.breadName}
          >
            <article className={isVisible ? "visible" : "hidden"}>
              <img src={x.srcPath} />
              <div className="desc-div">
                <h3>{x.breadName}</h3>
                <p>{x.advDescription}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurBreads;
