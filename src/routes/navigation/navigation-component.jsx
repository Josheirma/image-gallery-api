import { Outlet} from "react-router-dom";
import { NavigationContainer} from "./navigation-styles";


const Navigation = () => {
 return (
   //@
    <NavigationContainer>
       <Outlet />
    </NavigationContainer>
  );
};
export default Navigation;
