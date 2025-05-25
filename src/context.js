import React, { createContext, useState, useEffect } from "react";
//the context
export const ArtContext = createContext([]);

//the provider
export const UserProvider = ({ children }) => {
  const [artpiece, setArtpiece] = useState([]);

  
  // Fetches data from the included Express server.
// The server should be running locally (e.g. on http://localhost:3000) and provides endpoints for category data.
// See `server.js` for API route definitions (e.g. GET /api/categories).
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => {
        // see what you got
        console.log("Fetched data:", data); 
        //artpiece is being saved in context 
        setArtpiece(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    // Renders all components nested inside <UserProvider> in App.js.
// `children` refers to whatever is placed between <UserProvider>...</UserProvider>,
// allowing the provider to wrap and give context to its child components.
    <ArtContext.Provider value={artpiece}>{children}</ArtContext.Provider>
  );
};
