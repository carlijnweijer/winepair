import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import React, { useState } from "react";

type User = null | { username: string };

export const AuthContext = React.createContext<{
  user: User;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string) => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
  register: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: async (email, password) => {
          try {
            const result = await firebase
              .auth()
              .signInWithEmailAndPassword(email, password);
            console.log("login result is ", result);
          } catch (error) {
            console.error(error);
          }
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem("user");
        },
        register: async (email, password) => {
          try {
            const result = await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password);
            console.log("result is ", result);
          } catch (error) {
            console.error(error);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
