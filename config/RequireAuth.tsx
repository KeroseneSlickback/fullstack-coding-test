import Router from "next/router";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

interface Props {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: Props) => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      Router.push("/authenticate");
    }
  }, [Router, user]);

  if (user) {
    return children;
  }
};
