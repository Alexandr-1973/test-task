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

export const renderElemArray = (elem, item) => {
  let array = [];
  for (let i = 0; i < elem.length; i += 1) {
    if (
      Object.values(item).includes(elem[i]) ||
      Object.values(item.details).includes(elem[i])
    ) {
      if (!array.includes(elem[i])) {
        array.push(elem[i]);
      }
    }
    if (Object.keys(item).includes(elem[i])) {
      let check = true;
      for (let j = 0; j < array.length; j += 1) {
        if (array[j].includes(elem[i])) {
          check = false;
        }
      }
      if (check) {
        if (Number(`${item[elem[i]]}`) > 0) {
          array.push(`${item[elem[i]]} ${elem[i]}`);
        }
      }
    }

    if (Object.keys(item.details).includes(elem[i])) {
      let check = true;
      for (let k = 0; k < array.length; k += 1) {
        if (array[k].includes(elem[i])) {
          check = false;
        }
      }
      if (check) {
        if (Number(`${item.details[elem[i]]}`) > 0) {
          array.push(`${item.details[elem[i]]} ${elem[i]}`);
        }
      }
    }
  }
  return array;
};

export const tableValues = (elem, camperValue) => {
  if (camperValue[elem] === "fullyIntegrated") {
    return "Fully integrated";
  }
  if (camperValue[elem] === "panelTruck") {
    return "Panel truck";
  }

  if (camperValue[elem] === "alcove") {
    return "Alcove";
  }
  return camperValue[elem];
};
