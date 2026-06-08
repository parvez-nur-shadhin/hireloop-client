"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import React from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const {name, email, password} = data;
    const {data:res, error} = await authClient.signUp.email({
        name: name,
        email: email,
        password: password,
        callbackURL:'/'
    })

    console.log(res, error);
  };

  return (
    <div className="mx-auto min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold">Create An Account</h1>
        <h2 className="text-md text-white/60">
          Fill in the fields below to get started
        </h2>
      </div>

      <Form className="flex flex-col gap-4 w-full max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          isRequired
          name="name"
          type="text"
          placeholder="Enter Your Name"
        >
          <Label>Name</Label>
          <Input className={"p-4"} placeholder="john Doe" {...register("name")} />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input className={"p-4"} placeholder="john@example.com" {...register("email")} />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input className={"p-4"} placeholder="Enter your password" {...register("password")} />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex flex-col gap-3 w-full">
          <Button className={"w-full rounded-lg p-4"} type="submit">
            Submit
          </Button>
          <Button
            className={"w-full rounded-lg p-4"}
            type="reset"
            variant="secondary"
          >
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;
