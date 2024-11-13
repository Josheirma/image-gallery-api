import { DropDown } from "./panel-styles";


function Panel({artPiecesOfCategoryArray}) {
  
  
  return (
    <div>
      <DropDown>
        <div>
         
             <div >
                <p>{artPiecesOfCategoryArray.name}</p>
                <br></br>
                <img src={artPiecesOfCategoryArray.imageUrl} alt = {`Panel Image`} />
                <p>${artPiecesOfCategoryArray.price}.00</p>
                <p>{artPiecesOfCategoryArray.amtstars}</p> 
                <p>----</p>
              </div>
          
        </div>
      </DropDown>
    </div>
  );


  }

export default Panel;
