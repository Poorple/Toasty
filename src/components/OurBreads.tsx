import { useEffect, useRef, useState } from "react";
import breads from "../local-json/bread.json";
import "../styles/our-breads.scss";

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
    <div ref={ref} className="bread-div">
      <h2>Our Breads</h2>
      <section className="bread-sect">
        {breadsObj.map((x) => (
          <article
            className={isVisible ? "visible" : "hidden"}
            key={x.breadName}
          >
            <img src={x.srcPath} />
            <div className="desc-div">
              <h3>{x.breadName}</h3>
              <p>{x.advDescription}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default OurBreads;
