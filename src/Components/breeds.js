import Select from "react-select";
import { useState, useEffect } from "react";

const Breeds = () => {
  let breedNames = [];
  const [options, setOptions] = useState();
  const [selectedBreed, seSselectedBreed] = useState("");
  const url ="https://api.thedogapi.com/v1/breeds?api_key=e68c0c3f-806c-4077-acf2-d66e1f9c3ffd";
  useEffect(() => {
    fetch(url, {})
    .then((resp) => resp.json())
    .then((data) => {
    data.forEach((i) => {

        // destucturing
          const {name,image,id,temperament,origin,weight,height,life_span,} = i; 
          breedNames.push({
            name,
            label: name,
            url: image.url,
            id: id,
            temperament: temperament,
            origin: origin,
            metric_weight: weight.metric,
            metric_height: height.metric,
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
    <div className="card" style={{width: "18rem"}}>
            <img src={selectedBreed.url} alt="" className="card-img" />
            <div className="card-body col">
                <h5 className="card-title">{selectedBreed.name}</h5>
                <h6 className="card-text">
                {/* Bred Group: {bredGroup?bredGroup:"Data Unvailable"} <br /> */}
                Height: {selectedBreed.metric_height} Cm  <br />
                Weight: {selectedBreed.metric_weight} Kg<br />
                Life Span: {selectedBreed.life_span} <br />
                Origin: {selectedBreed.origin}
                </h6>
            </div>
    </div>


    </>
  );
};

export default Breeds;



        
