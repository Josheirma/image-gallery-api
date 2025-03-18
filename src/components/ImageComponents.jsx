import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { Body, DirectoryItemContainer, Img } from "./images-styles";

function ImageComponents({ imageUrl, route}) {
 
  return (
    <NavLink to={route}>
      <DirectoryItemContainer>
        <Body>
          <img src={imageUrl} alt={`artists`} />
        </Body>
      </DirectoryItemContainer>
    </NavLink>
  );
}

ImageComponents.propTypes = {
    imageUrl:PropTypes.
};

export default ImageComponents;

// const Images = ({ category }) => {
//   let { imageUrl, route } = category;
//    return (
//     <NavLink to={route}>
//     <DirectoryItemContainer>
//       <Body>
//         <img src={imageUrl} alt={`artists`} />
//        </Body>
//     </DirectoryItemContainer>
//     </NavLink>
//   );
// };
// export default Images;
