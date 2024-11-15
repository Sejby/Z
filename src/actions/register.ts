"use server";

import { User } from "@/lib/mongodb/models/post";
import connectToDB from "@/lib/mongodb/mongo";

export async function register(
  prevState: any,
  formData: FormData
): Promise<any> {
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

    return { status: 200, message: "Úspěšně jste se zaregistrovali" };
  } catch (error: any) {
    return { status: 500, message: error.message };
  }
}
