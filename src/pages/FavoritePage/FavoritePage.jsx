import { useState } from "react";
import CamperCard from "../../components/CamperCard/CamperCard";

const FavoritePage = () => {
  const [favoriteCampers, setFavoriteCampers] = useState(() =>{
    return JSON.parse(localStorage.getItem("favoriteCampers"))}
  );

  console.log(favoriteCampers);
  

const handleClick = (id)=>{

  const newFavoriteArray = favoriteCampers.filter(item => item._id !== id);
  localStorage.setItem("favoriteCampers", JSON.stringify(newFavoriteArray));
setFavoriteCampers(newFavoriteArray);
}




  return (
    // <p></p>
    <ul>
{(!favoriteCampers || favoriteCampers.length===0) && <p>No favorite campers adverts</p>}
{favoriteCampers && favoriteCampers.map((item)=>{
  return (
<li key={item._id}>
        <CamperCard item={item}/>
        <button onClick={()=>handleClick(item._id)}>delete from favorite</button>
        </li>)}
  
  )}
  </ul>
  )

}

    



export default FavoritePage;
