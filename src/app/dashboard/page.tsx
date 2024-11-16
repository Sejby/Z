"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function Dashboard() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  return <div>Dashboard</div>;
}
