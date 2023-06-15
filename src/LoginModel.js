import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "./Heading";
import Input from "./Input";
import { toast } from "react-hot-toast";
import Buttons from "./Buttons";
import useLoginModel from "./hooks/useLoginModel";
import useRegisterModel from "./hooks/useRegisterModel";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { useEffect } from "react";

const LoginModel = () => {
  const { setUser, user } = useContext(UserContext);
  const navigate = useNavigate();
  const registerModel = useRegisterModel();
  const loginModel = useLoginModel();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onsubmit = async (data) => {
    setIsLoading(true);
    const userInfo = await fetch(
      "https://homestay-app-server.cyclic.app/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ); // this is the same as axios

    try {
      if (userInfo.ok) {
        const userInfoData = await userInfo.json();

        setUser(userInfoData);

        // console.log(userInfoData)

        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("dataKey", JSON.stringify(userInfoData));

        loginModel.onClose();
        setIsLoading(false);
        // debugger
        // {user? navigate('/account'):navigate('/')}
        toast.success(`Logged in Welcome back `);
        navigate("/account");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome Back" subtitle="Login to your account" />
      {/* this is input field for form */}

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      {/* <Buttons
        outline
        label="Continue with Google"
        icons={FcGoogle}
        onClick={() => {}}
      />
      <Buttons
        outline
        label="Continue with Github"
        icons={AiFillGithub}
        onClick={() => {}}
      /> */}
    </div>
  );
  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={loginModel.isOpen}
        title="Login"
        actionLabel="Continue"
        onClose={loginModel.onClose}
        onSubmit={handleSubmit(onsubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default LoginModel;
