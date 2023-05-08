import React from "react";
import axios from "axios";
// import { AiFillGithub } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useRegisterModel from "./hooks/useRegisterModel";
import Modal from "./Modal";
import Heading from "./Heading";
import Input from "./Input";
import { toast } from "react-hot-toast";
import Buttons from "./Buttons";
import useLoginModel from "./hooks/useLoginModel";

const RegisterModel = () => {
  const registerModel = useRegisterModel();
  const loginModel = useLoginModel();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onsubmit = async (data) => {
    try {
      setIsLoading(true);
      // write it in fetch
      const res = await fetch(
        "https://homestay-app-server.cyclic.app/user/register",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const result = await res.json();
      console.log(result);
      if (res.ok) {
        toast.success("Account created");
        registerModel.onClose();
      } else {
        toast.error("Something went wrong");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to HomeStay" subtitle="Create an account" />
      {/* this is input field for form */}

      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
      <div className="text-neutral-500 text-center mt-1 mb-1 font-light ">
        <div className="flex flex-row items-center gap-2 justify-center">
          <div>Already a User?</div>
          <div
            className="cursor-pointer hover:underline text-neutral-800"
            onClick={loginModel.onOpen}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={registerModel.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={registerModel.onClose}
        onSubmit={handleSubmit(onsubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default RegisterModel;
