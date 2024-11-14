import LoginLink from "@/components/common/login-link";
import RegisterLink from "@/components/common/register-link";

export default async function Home() {
  return (
    <div>
      <LoginLink />
      <RegisterLink />
    </div>
  );
}
