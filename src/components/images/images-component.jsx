import { NavLink } from "react-router-dom";
import "../../global.css";
import styles from "./images.module.css";

const Images = ({ category }) => {
  let { imageUrl, route } = category;
  return (
    //creates a hypertext link
    <NavLink to={route}>
      <div>
        <img className={styles.ArtistImage} src={imageUrl} alt={`artists`} />
      </div>
    </NavLink>
  );
};
export default Images;
