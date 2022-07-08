// import Select from "react-select";
// import { useState } from "react";

// const DogBreeds = () => {
//   let breedNames = [];
//   let breedImgaes = [];
//   const [options, setOptions] = useState();
//   const [image, setImage] = useState();
//   const url =
//     "https://api.thedogapi.com/v1/breeds?api_key=e68c0c3f-806c-4077-acf2-d66e1f9c3ffd";
//   fetch(url, {})
//     .then((resp) => resp.json())
//     .then((data) => {
//       breedNames = data.filter((i) => breedNames.push(i.name));
//       setOptions(breedNames.map((b) => ({ value: b.name, label: b.name })));
//       setImage(breedImgaes.map((b) => ({ value: b.image.url, label: b.image.url })));
//     });

//   return (
//     <div>
//       <Select options={options} />
//     </div>
//   );
// };

// export default DogBreeds;
