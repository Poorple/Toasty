import advantages from "../local-json/bread-baking-advantages.json";
import "../styles/delicious-baking.scss";

const DeliciousBaking = () => {
  return (
    <section className="second-section">
      <h2>
        {/* Bread: the universal love language of the culinary world */}
        Delicious Baking
      </h2>
      <div className="grid-map">
        {advantages.map((x) => (
          <article key={x.advTitle}>
            <img src={x.srcPath} />
            <div>
              <h3>{x.advTitle}</h3>
              <p>{x.advDescription}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DeliciousBaking;
