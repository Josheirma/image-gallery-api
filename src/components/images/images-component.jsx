import { NavLink } from "react-router-dom";
//import { Body, DirectoryItemContainer, Img } from "./images-styles";
import styles from "../../script.module.css"

const Images = ({ category }) => {
  let { imageUrl, route } = category;
   return (
    <NavLink to={route}>
    
      <div>
        <img className = {styles.ArtistImage} src={imageUrl} alt={`artists`} />
       </div>
    
    </NavLink>
  );
};
export default Images;
