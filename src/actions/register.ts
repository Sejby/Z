"use server";

import { User } from "@/lib/mongodb/models/post";
import connectToDB from "@/lib/mongodb/mongo";

export type RegisterState = {
  status: number;
  message: string;
};

export async function register(
  prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  try {
    await connectToDB();

    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    return {
      status: 200,
      message: "Úspěšně jste se zaregistrovali",
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { status: 500, message: error.message };
    }
    return { status: 500, message: "Došlo k neznámé chybě" };
  }
}
