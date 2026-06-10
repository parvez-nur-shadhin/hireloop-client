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
  Select,
  ListBox,
} from "@heroui/react";
import Link from "next/link";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      role: "seeker",
    },
  });

  const onSubmit = async (data) => {
    const { name, email, password, role } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      role: role,
      callbackURL: "/",
    });

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

      <Form
        className="flex flex-col gap-4 w-full max-w-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          isRequired
          name="name"
          type="text"
          placeholder="Enter Your Name"
        >
          <Label>Name</Label>
          <Input
            className={"p-4"}
            placeholder="john Doe"
            {...register("name")}
          />
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
          <Input
            className={"p-4"}
            placeholder="john@example.com"
            {...register("email")}
          />
          <FieldError />
        </TextField>
        <Controller
          name="role"
          control={control}
          render={({ field }) => {
            return (
              <Select
                className="w-full max-w-2xl"
                placeholder="Select one"
                label="Select Role"
                // selectedKeys={field.value ? [field.value] : []}
                onChange={(selectedValue) => {
                  field.onChange(selectedValue);
                }}
              >
                <Label>Role</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="seeker" textValue="seeker">
                      Seeker
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="recruiter" textValue="recruiter">
                      Recruiter
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            );
          }}
        />
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
          <Input
            className={"p-4"}
            placeholder="Enter your password"
            {...register("password")}
          />
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
      <div className="mt-5">
        <h1>
          Have an Account?{" "}
          <span>
            <Link
              className="text-[#5C53FE] hover:text-[#26209f]"
              href={"/sign-in"}
            >
              Sign In
            </Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SignUpPage;
