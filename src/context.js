import React, { createContext, useState, useEffect } from "react";

export const ArtContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [artpiece, setArtpiece] = useState([]);

  //fetches from included express server
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // <-- see what you got
        setArtpiece(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    //renders everything between <Userprovider> in  App.js : what children means
    <ArtContext.Provider value={artpiece}>{children}</ArtContext.Provider>
  );
};
