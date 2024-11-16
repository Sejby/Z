import LoginLink from "@/components/common/login-link";
import RegisterLink from "@/components/common/register-link";
import { getServerSession, Session } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session: Session | null = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div>
      <h2 className="text-center text-2xl pt-10">
        Pro pokračování se musíte přihlásit/zaregistrovat
      </h2>
      <div className="mx-auto max-w-[250px] pt-6 flex flex-col space-y-2">
        <LoginLink />
        <RegisterLink />
      </div>
    </div>
  );
}
