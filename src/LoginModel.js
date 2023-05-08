import React, { useReducer } from "react";
import axios from "axios";
// import { useReducer } from 'react'
// import {signIn} from 'next-auth/react'
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "./Heading";
import Input from "./Input";
import { toast } from "react-hot-toast";
import Buttons from "./Buttons";
import useLoginModel from "./hooks/useLoginModel";
import useRegisterModel from "./hooks/useRegisterModel";
import { useNavigate } from "react-router-dom";
// import { Router } from 'react-router-dom'
// import {useRouter} from 'next/navigation'

const LoginModel = () => {
  // const navigate =useNavigate()
  // const router =useRouter()
  // const [ignored ,forceUpdate] =useReducer(x=>x+1 , 0)
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

  const onsubmit = (data) => {
    setIsLoading(true);
    // signIn("credentials", {
    //   ...data,
    //   redirect: false,
    // }).then((callback) => {
    //   setIsLoading(false);
    //   if (callback?.ok) {
    //     toast.success("Logged in");
    //     // router.refresh()
    //     // loginModel.onClose()
    //     // forceUpdate()
    //   }
    //   if (callback?.error) {
    //     toast.error(callback.error);
    //   }
    // });
    // axios
    //   .post("https://homestay-app-server.cyclic.app/user/login", data)
    //   .then((res) => {
    //     // console.log(res.data)
    //     if (res.data) {
    //       toast.success("Logged in");
    //       loginModel.onClose();
    //       // navigate('/')
    //       // router.push('/')
    //       // forceUpdate()
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error(err);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
    // write the same in fetch
    fetch("http://localhost:3002/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // body: data,
    }) // this is the same as axios
      .then((res) => {
        if (res.ok) {
          toast.success("Logged in");
          loginModel.onClose();
          // navigate('/')
          // router.push('/')
          // forceUpdate()
        }
      }) // this is the same as axios

      .catch((err) => {
        toast.error(err);
      }) // this is the same as axios
      .finally(() => {
        setIsLoading(false);
      }); // this is the same as axios
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome Back" subtitle="Login to your account" />
      {/* this is input field for form */}

      {/* <Input 
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />  */}
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
      <Buttons
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
      />
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
