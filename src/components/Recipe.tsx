import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import breads from "../local-json/bread.json";
import "../styles/recipe.css";

interface DynamicObject {
  [key: string]: any;
}

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Recipe = () => {
  const breadObj = breads.breads;
  const [formattedUrlParam, setFormattedUrlParam] = useState<string>("");
  const [selectedBread, setSelectedBread] = useState<DynamicObject>();
  const [stepHeight, setStepHeight] = useState<number>();

  const { bread } = useParams<{ bread: string }>();

  const firstElementRef = useRef<HTMLDivElement>(null);
  const secondElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstElementRef.current && secondElementRef.current) {
      const secondElementHeight = stepHeight;
      firstElementRef.current.style.height = `${secondElementHeight}px`;
    }
  }, [stepHeight]);

  useEffect(() => {
    if (secondElementRef.current?.clientHeight)
      setStepHeight(secondElementRef.current.clientHeight);
  }, [secondElementRef.current?.clientHeight]);

  useEffect(() => {
    if (bread) {
      if (bread.includes("-")) {
        setFormattedUrlParam(bread.replace("-", " ").toUpperCase());
      } else {
        setFormattedUrlParam(bread.toUpperCase());
      }
    }
  }, [bread, breadObj]);

  useEffect(() => {
    if (formattedUrlParam) {
      const selected = breadObj.find((x) => x.breadName === formattedUrlParam);
      setSelectedBread(selected);
    }
  }, [formattedUrlParam, bread]);

  useEffect(() => {
    console.log(selectedBread);
    console.log(bread?.split("-"));
    console.log(selectedBread?.source);
  }, [selectedBread]);

  function Recurs(obj: DynamicObject): React.ReactNode {
    return (
      <>
        {Object.keys(obj).map((x) =>
          !(typeof obj[x] === "object") ? (
            <p key={x}>{`${capitalizeFirstLetter(x)}: ${[obj[x]]}`}</p>
          ) : (
            <div>
              <h4>{capitalizeFirstLetter(x)}:</h4>
              {Object.keys(obj[x]).map((y: any) =>
                typeof !(y === "number") ? (
                  <p>{`${obj[x][y]}`}</p>
                ) : (
                  <p>{`${capitalizeFirstLetter(y)}: ${obj[x][y]}`}</p>
                )
              )}
            </div>
          )
        )}
      </>
    );
  }

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, []);
  return (
    <>
      <section className="header-and-img-sect">
        <img src={selectedBread?.srcPath} />
      </section>
      <section className="ingredients-and-step-sect">
        {selectedBread ? (
          <div className="prep-and-ingredients-sect" ref={firstElementRef}>
            <div style={{ position: "sticky", top: 0 }}>
              <h2>{selectedBread?.breadName}</h2>
              <div>
                <h3>Prep Time</h3>
                {Object.keys(selectedBread.prepTime[0]).map((x) => (
                  <p>{`${capitalizeFirstLetter(x)}: ${
                    selectedBread.prepTime[0][x]
                  }`}</p>
                ))}
              </div>
              <div className="ingredients-div">
                <h3>Ingredients</h3>
                {Recurs(selectedBread.ingredients)}
              </div>
            </div>
          </div>
        ) : null}
        <div className="step-sect" ref={secondElementRef}>
          <h3>Steps</h3>
          {selectedBread ? (
            <ol>
              {selectedBread.steps.map((x: any) => (
                <li>{x}</li>
              ))}
            </ol>
          ) : null}
        </div>
      </section>
      {selectedBread ? (
        <footer>
          {`These recipes were obtained from `}
          <a href={selectedBread.source}>these</a>
          {` lovely people`}

          <p>
            This website was made as a side project, all of the credit for the
            recipes goes to the people mentioned above.
          </p>
        </footer>
      ) : null}
    </>
  );
};

export default Recipe;
