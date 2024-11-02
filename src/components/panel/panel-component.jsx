import { DropDown } from "./panel-styles";


function Panel({product}) {
  return (
    <div>
      <DropDown>
        <div>
         {product &&
            product.map((item, index) => (
             <div key={index}>
                <p>{item.name}</p>
                <br></br>
                <img src={item.imageUrl} alt = {`Panel Image`} />
                <p>${item.price}.00</p>
                <p>{item.amtstars}</p> 
                <p>----</p>
              </div>
            ))}
        </div>
      </DropDown>
    </div>
  );
}

export default Panel;
