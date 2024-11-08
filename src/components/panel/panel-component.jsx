import { DropDown } from "./panel-styles";


function Panel({arrayOfProducts3}) {
  
  
  return (
    <div>
      <DropDown>
        <div>
         
             <div >
                <p>{arrayOfProducts3.name}</p>
                <br></br>
                <img src={arrayOfProducts3.imageUrl} alt = {`Panel Image`} />
                <p>${arrayOfProducts3.price}.00</p>
                <p>{arrayOfProducts3.amtstars}</p> 
                <p>----</p>
              </div>
          
        </div>
      </DropDown>
    </div>
  );


  }

export default Panel;
