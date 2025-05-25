import { Routes, Route } from "react-router-dom";
import React from "react";
import Navigation from "./routes/navigation/navigation-component";
import Category from "./routes/category/category-component";
import Directory from "./routes/directory/directory-component"
import "./global.css"
import  {UserProvider}  from "./context";

const App = () => {
 return (
  <UserProvider>
    {/* // Nested routes (indented) will render inside this component using the <Outlet /> */}
    <div className="App">
      <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Directory />} />
            <Route path="category/:category" element={<Category />} />
          </Route>
        </Routes>
     </div>
     </UserProvider>  
  );
};
export default App;
