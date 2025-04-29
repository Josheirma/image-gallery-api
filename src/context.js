import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  //fetches from included express server
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);  // <-- see what you got
        setUser(data);
        
      })
      .catch((error) => console.error("Error fetching data:", error));
  
    }, []);
  

  return (
    
    //renders everything between <Userprovider> in  App.js : what children means 
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}