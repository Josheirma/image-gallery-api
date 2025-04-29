import {useEffect, useLayoutEffect , useRef}from 'react';
import "../../global.css"
import styles from "../art-piece/art-piece.module.css";

const ArtPieceItem = ({item, updateStars}) => {
  console.log("art5: ", item)
  
const divRef = useRef(null);
//const [width, setWidth] = useState(0);

  const sendWidth = (msg) => {
  
  //onWidthChanged(msg);
  
  }
 
  useLayoutEffect(() => {
    console.log("1")
    sendWidth(divRef.current.offsetWidth);
  });


  useEffect(() => {
  
  console.log("here")
  // Attach the event listener
  window.addEventListener("resize", sendWidth);

  // Cleanup: Remove the event listener on component unmount
  return () => {
    window.removeEventListener("resize", sendWidth);
  };

  }, []);

  return(
    <div className = {styles.ComponentArtpiece}>
    
    <div ref={divRef}  key={item.imageUrl}>
    <div className = {styles.ContainerForCard}>
      <div className = {styles.ImageHeading}> {item.name}</div> 
      <div className = {styles.ImageHeading}> ${item.price}.00</div> 
        <div className = {styles.ImageHolder} >
        
       
        <img className = {styles.Image} src={item.imageUrl} alt = "Artwork"   />
        </div>
        
        <div className = {styles.InputContainer}>
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
       </div>
  )

  
}

export default ArtPieceItem;