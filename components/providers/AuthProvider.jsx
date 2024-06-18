"use client";

import AuthPage from "../auth/AuthPage";
import React from "react";
import useAuth from "@/stores/useAuth";

const AuthProvider = () => {
  const { isAuth } = useAuth();
  if (isAuth) return <AuthPage />;
};

export default AuthProvider;
