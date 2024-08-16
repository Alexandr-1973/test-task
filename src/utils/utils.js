export const addToLS = (camper, id) => {
  const favoriteCampersLS =
    JSON.parse(localStorage.getItem("favoriteCampers")) || [];
  const isCopy = favoriteCampersLS.some((item) => item._id === id);
  if (!isCopy) {
    favoriteCampersLS.push(camper);
  }
  localStorage.setItem("favoriteCampers", JSON.stringify(favoriteCampersLS));
};

export const filtersObject = (filtersArray) => {
  let paramsObject = {
    location: filtersArray[0],
  };

  for (let i = 1; i <= filtersArray.length - 1; i += 1) {
    if (filtersArray[i] === "AC") {
      paramsObject = {
        AC: 1,
        ...paramsObject,
      };
    }
    if (filtersArray[i] === "Automatic") {
      paramsObject = {
        transmission: "automatic",
        ...paramsObject,
      };
    }

    if (filtersArray[i] === "Kitchen") {
      paramsObject = {
        kitchen: 1,
        ...paramsObject,
      };
    }
    if (filtersArray[i] === "TV") {
      paramsObject = {
        TV: 1,
        ...paramsObject,
      };
    }
    if (filtersArray[i] === "Shower/WC") {
      paramsObject = {
        shower: 1,
        ...paramsObject,
      };
    }

    if (filtersArray[i] === "Van") {
      paramsObject = {
        form: "panelTruck",
        ...paramsObject,
      };
    }
    if (filtersArray[i] === "Fully Integrated") {
      paramsObject = {
        form: "fullyIntegrated",
        ...paramsObject,
      };
    }
    if (filtersArray[i] === "Alcove") {
      paramsObject = {
        form: "alcove",
        ...paramsObject,
      };
    }
  }
  return paramsObject;
};
