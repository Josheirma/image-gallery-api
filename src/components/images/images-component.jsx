import { NavLink } from "react-router-dom";
import styles from "../../script.module.css"

const Images = ({ category }) => {
  let { imageUrl, route } = category;
   return (
    <NavLink to={route}>
    
        <img className = {styles.FaceImages} src={imageUrl} alt={`artists`} />
       
    </NavLink>
  );
};
export default Images;
