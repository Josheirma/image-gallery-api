import { NavLink } from "react-router-dom";
import { Body, DirectoryItemContainer } from "./images-styles";

const Images = ({ category }) => {
  let { imageUrl, route } = category;
   return (
    <NavLink to={route}>
    <DirectoryItemContainer>
      <Body>
        <img src={imageUrl} alt={``} />
       </Body>
    </DirectoryItemContainer>
    </NavLink>
  );
};
export default Images;
