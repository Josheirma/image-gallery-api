import "./art-piece-styles.css";
import { ImageHeading } from "./art-piece-styles.jsx";
import React, { useRef } from 'react';
//import './CategoryContainer.css'; // Assuming the CSS for the grid layout.



//const ArtPieceItem = ({item, updateStars}) => {
//const ArtPieceItem = React.forwardRef(({ item, updateStars }, ref)) => {
  const ArtPieceItem = React.forwardRef((props, ref) => {
    const { item, updateStars } = props;
  

  return(
    <div ref = {ref}>
    <div key={item.imageUrl}>
    <div>
      <ImageHeading> {item.name}</ImageHeading> 
     
        <div className = "image-holder" >
        <img type="Image" src={item.imageUrl} alt = "Image of Art"   />
        </div>
        <input
          checked={item.amountStarsNumber >= 1}
          type={`checkbox`}
          onChange={() => 
            updateStars(item.id, 1)
             }
          />
        <input
          checked={item.amountStarsNumber >= 2}
          type={`checkbox`}
          onChange={() => 
            updateStars(item.id, 2)
          }
        />
        <input
          checked={item.amountStarsNumber >= 3}
          type={`checkbox`}
          onChange={() => 
            
            updateStars(item.id, 3)}
        />
        <input
          checked={item.amountStarsNumber >= 4}
          type={`checkbox`}
          onChange={() => 
          
          updateStars(item.id, 4)}
        />
      
    </div>
    
      
    
       </div>
       </div>
  )

  
})

export default ArtPieceItem;