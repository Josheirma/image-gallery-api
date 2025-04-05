import { NavLink } from "react-router-dom";
<<<<<<< HEAD
=======
//import { Body, DirectoryItemContainer, Img } from "./images-styles";
>>>>>>> fixModuleCSS
import styles from "../../script.module.css"

const Images = ({ category }) => {
  let { imageUrl, route } = category;
   return (
    <NavLink to={route}>
    
<<<<<<< HEAD
        <img className = {styles.FaceImages} src={imageUrl} alt={`artists`} />
       
=======
      <div>
        <img className = {styles.ArtistImage} src={imageUrl} alt={`artists`} />
       </div>
    
>>>>>>> fixModuleCSS
    </NavLink>
  );
};
export default Images;
