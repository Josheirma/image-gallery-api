import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((user2) => {
        console.log("Fetched user2:", user2);  // <-- see what you got
        setUser(user2);
        //alert("1")
      })
      .catch((error) => console.error("Error fetching data:", error));
  
    }, []);
  
  useEffect(() => {
    console.log("user updated:", user);
    
  }, [user]);

  return (
    
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}