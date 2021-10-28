/** @format */

import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../../../firebase";
import { Spin } from "antd";
import { useNavigation } from "@react-navigation/core";
import { ROUTE_KEYS } from "../../../routes";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        navigation.navigate(ROUTE_KEYS.HOME);
        return;
      }
      setUser({});
      setIsLoading(false);
      navigation.navigate(ROUTE_KEYS.SIGN_IN);
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
