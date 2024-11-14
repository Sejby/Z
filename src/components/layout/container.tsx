import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-[1400px] mx-auto bg-zinc-100 min-h-screen flex flex-col">{children}</div>;
}
