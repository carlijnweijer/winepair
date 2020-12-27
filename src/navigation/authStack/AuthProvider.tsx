import firebase from "firebase";
import "firebase/auth";
import React, { useState } from "react";

type User = null | firebase.User;

export const AuthContext = React.createContext<{
  user: User;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string) => void;
  setUser: (user: User) => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
  register: () => {},
  setUser: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
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
          try {
            firebase.auth().signOut();
          } catch (error) {
            console.error(error);
          }
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
