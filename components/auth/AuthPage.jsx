"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import register from "../../public/images/peakpx.jpg";
import useAuth from "@/stores/useAuth";

const AuthPage = () => {
  const { onClose, isAuth } = useAuth();
  const [pageType, setPageType] = useState("register");
  useEffect(() => {
    if (isAuth) {
      document.body.classList.add("overflow-hidden");
    } else if (!isAuth) {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isAuth]);

  return (
    <>
      <div
        onClick={() => onClose()}
        className="fixed inset-0 bg-black/50 z-[999]"
      />
      <div className="flex items-center justify-center">
        <div className="fixed overflow-hidden lg:grid lg:grid-cols-[2fr_3fr] inset-0 rounded-lg shadow-md z-[9999] w-[90vw] md:w-[70vw] lg:w-2/5 h-4/5 m-auto bg-white">
          <div className="h-full hidden lg:block">
            <Image className="h-full" src={register} alt="auth" />
          </div>
          <div className="">
            <div className="flex text-center border-b">
              <span
                onClick={() => setPageType("register")}
                className={`flex-1 py-3 cursor-pointer medium  ${pageType === 'register' ? 'bg-slate-100 text-slate-900' : 'text-slate-500'}`}
              >
                ثبت نام
              </span>
              <span
                onClick={() => setPageType("login")}
                className={`flex-1 py-3 cursor-pointer medium  ${pageType === 'login' ? 'bg-slate-100 text-slate-900' : 'text-slate-500'}`}
              >
                ورود
              </span>
            </div>
            {pageType === "register" ? <RegisterForm setPageType={setPageType} /> : <LoginForm setPageType={setPageType} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
