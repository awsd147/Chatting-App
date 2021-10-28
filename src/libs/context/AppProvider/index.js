/** @format */

import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [isSignOut, setIsSignOut] = useState(false);
  return (
    <AppContext.Provider
      value={{ visibleModal, setVisibleModal, isSignOut, setIsSignOut }}
    >
      {children}
    </AppContext.Provider>
  );
};
