import "./art-piece-styles.css";


const ArtPieceItem = ({item, updateStars}) => {



  return(
    <div>
    <div key={item.imageUrl}>
    <div>
      <h2>{item.name}</h2>
     
        
        <img type="Image" src={item.imageUrl} alt = "Image of Art"   />
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


}

export default ArtPieceItem;