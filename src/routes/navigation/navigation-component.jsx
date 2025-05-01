import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    //Outlet is where child routes in router code (App.js) of <navigation/> go
    <Outlet />
  );
};
export default Navigation;
