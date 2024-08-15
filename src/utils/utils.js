export const addToLS =(camper,id)=>{
	const favoriteCampersLS =
	JSON.parse(localStorage.getItem("favoriteCampers")) || [];
  const isCopy = favoriteCampersLS.some((item) => item._id === id);
  if (!isCopy) {
	favoriteCampersLS.push(camper);
  }
  localStorage.setItem("favoriteCampers", JSON.stringify(favoriteCampersLS));
}