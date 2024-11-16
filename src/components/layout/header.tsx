"use server";

import { getServerSession } from "next-auth";
import HeaderContent from "./header-content";

export default async function Header() {
  const session = await getServerSession();

  return <HeaderContent session={session} />;
}
