import { DropDown } from "./panel-styles";
import './panel-styles.css'

const Panel = ({items}) => {
  
  console.log("item1: ", items)
  
  
  let amountOfStars = ""
  
  
  //HERE, INSTEAD OF SETTING CHECKS TO STRING IN UPDATE STARS, CHECK FOR AMTSTARSNUMBER AND ASSIGN A VARIABLE HERE
  //
  return (
    
      <DropDown>
   
    {items.map((item) => (
      
      
         
             <div key = {item.id}>
                <p>{item.name}</p>
                <br></br>
                <img className = "panelimage" src={item.imageUrl} alt = {`Panel Image`} />
                <p>${item.price}.00</p>
                <p>{item.amtstars}</p> 
                <p>----</p>
              </div>
           ))}
       
      </DropDown>
    
  );


  }

export default Panel;
