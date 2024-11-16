"use client";

import { register, RegisterState } from "@/actions/register";
import { useActionState } from "react";
//import { useFormStatus } from "react-dom";
import LoginLink from "../common/login-link";

const initialState: RegisterState = {
  status: 0,
  message: "",
};

export default function RegisterForm() {
  const [state, formAction] = useActionState(register, initialState);
  //const { pending } = useFormStatus();

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 p-5 pt-10 w-96 mx-auto bg-white rounded shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Registrace</h2>

      <label htmlFor="username" className="font-medium">
        Přezdívka
      </label>
      <input
        type="text"
        name="username"
        required
        className="p-2 border rounded"
        placeholder="Pepa..."
      />

      <label htmlFor="email" className="font-medium">
        Email
      </label>
      <input
        type="email"
        name="email"
        required
        className="p-2 border rounded"
        placeholder="pepa@email.cz"
      />

      <label htmlFor="password" className="font-medium">
        Password
      </label>
      <input
        type="password"
        name="password"
        required
        className="p-2 border rounded"
        placeholder="*****"
      />

      <button
        type="submit"
        className="mt-3 relative inline-block p-3 px-6 py-3 bg-gray-700 text-white rounded-md font-semibold transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-102 hover:bg-gray-500 shadow-lg hover:shadow-xl"
      >
        Registrovat
        <span className="absolute inset-0 w-full h-full rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-30"></span>
      </button>

      <p
        aria-live="polite"
        role="status"
        className={`mt-4 p-4 rounded-md transition-all duration-200 transform ${
          state?.status === 200
            ? "bg-green-100 text-green-600 opacity-100 animate-growFromTop"
            : state?.status === 500
            ? "bg-red-100 text-red-600 opacity-100 animate-growFromTop"
            : "opacity-0"
        }`}
      >
        {state?.message}
      </p>

      <div className="w-full mx-auto">
        {state?.status === 200 && <LoginLink />}
      </div>
    </form>
  );
}
