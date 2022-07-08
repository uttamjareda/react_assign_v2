import Select from "react-select";
import { useState, useEffect } from "react";

const Breeds = () => {
  let breedNames = [];
  const [options, setOptions] = useState();
  const [selectedBreed, seSselectedBreed] = useState("");
  const url =
    "https://api.thedogapi.com/v1/breeds?api_key=e68c0c3f-806c-4077-acf2-d66e1f9c3ffd";
  useEffect(() => {
    fetch(url, {})
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach((i) => {
          const {
            name,
            image,
            id,
            temperament,
            origin,
            weight,
            height,
            life_span,
          } = i; // Destructuring as objects
          breedNames.push({
            name,
            label: name,
            url: image.url,
            id: id,
            temperament: temperament,
            origin: origin,
            metricw: weight.metric,
            metrich: height.metric,
            life_span: life_span,
          });
          setOptions(breedNames);
        });
      });
  }, []);

  const changeHandler = (e) => {
    seSselectedBreed(e);
  };

  return (
    <>
      <Select options={options} onChange={changeHandler} />
      <br />
      <img
        margin="12px"
        height="500px"
        src={selectedBreed.url}
        alt="Please select the dog name above"
      />
      <div style={{ fontSize: 38, fontFamily: "cursive", fontWeight: "bold" }}>
        {selectedBreed.name}
      </div>
      <div style={{ fontWeight: "bold" }}>id: {selectedBreed.id}</div>
      <div>---</div>
      <div style={{ fontStyle: "italic" }}>{selectedBreed.temperament}</div>
      <div style={{ fontStyle: "italic" }}>{selectedBreed.origin}</div>
      <div style={{}}>{selectedBreed.metricw} kgs</div>
      <div style={{}}>{selectedBreed.metrich} cm at the withers</div>
      <div>{selectedBreed.life_span} avg life span</div>
    </>
  );
};

export default Breeds;
