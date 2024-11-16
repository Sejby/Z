"use server";

import { signIn } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type LoginState = {
  status: number;
  message: string;
};

export async function LoginUserAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState | void> {
  try {
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) {
      return <LoginState>{ status: 401, message: "Invalid Credentials" };
    }

    revalidatePath("/dashboard");
    redirect("/dashboard");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return <LoginState>{ status: 500, message: error.message };
    }
  }
}
