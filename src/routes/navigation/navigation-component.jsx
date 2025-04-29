import { Outlet} from "react-router-dom";
import { NavigationContainer} from "./navigation-styles";


const Navigation = () => {
 return (
   //Outlet is where child routes in router code (App.js) of <navigation/> go
    <NavigationContainer>
       <Outlet />
    </NavigationContainer>
  );
};
export default Navigation;
