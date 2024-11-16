"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Router, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError(""); // Reset error message before new attempt

    try {
      // Try signing in using credentials provider
      const res = await signIn("credentials", {
        redirect: false, // don't redirect automatically, we want to handle it
        email,
        password,
        callbackUrl: "/dashboard",
      });

      // If sign in is successful
      if (res?.ok) {
        toast.success("Přihlášení úspěšné!");
        router.push("/dashboard");
        router.refresh();
        
      } else if (res?.error) {
        setError(res.error); // Display the error message returned from next-auth
      }
    } catch (error: unknown) {
      console.error(error);
      setError("Nastala chyba při přihlašování. Zkuste to prosím znovu.");
    } finally {
      setPending(false); // Reset pending state after the operation completes
    }
  };

  const handleProvider = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: "github" | "google"
  ) => {
    event.preventDefault();
    signIn(value, { callbackUrl: "/" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-5 pt-10 w-96 mx-auto bg-white rounded shadow-lg"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Přihlášení</h2>
      <p className="text-center text-gray-500 mb-6">
        Přihlášení přes e-mail a heslo
      </p>

      {/* Error message display */}
      {!!error && (
        <div className="bg-red-100 text-red-600 p-3 rounded-md flex items-center gap-2 text-sm mb-6 animate-pulse">
          <TriangleAlert className="w-5 h-5" />
          <p>{error}</p>
        </div>
      )}

      <div>
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          disabled={pending}
          placeholder="pepa@email.cz"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="p-2 border rounded w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          disabled={pending}
          placeholder="*****"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          className="p-2 border rounded w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="relative inline-block p-3 px-6 py-3 bg-gray-700 text-white rounded-md font-semibold transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-102 hover:bg-gray-500 shadow-lg hover:shadow-xl w-full mt-4"
        disabled={pending}
      >
        Přihlásit
        <span className="absolute inset-0 w-full h-full rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-30"></span>
      </button>

      <p className="text-center text-sm text-gray-500">
        Ještě nemáš účet?
        <Link href="/sign-up" className="text-blue-600 ml-2 hover:underline">
          Registruj se
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
