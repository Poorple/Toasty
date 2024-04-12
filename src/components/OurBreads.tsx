import { useEffect } from "react";
import breads from "../local-json/bread.json";
import "../styles/our-breads.scss";

const OurBreads = () => {
  let breadsObj = breads.breads;
  useEffect(() => {
    console.log(breadsObj);
  }, []);
  return (
    <div className="bread-div">
      <h2>Our Breads</h2>
      <section className="bread-sect">
        {breadsObj.map((x) => (
          <article key={x.breadName}>
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
