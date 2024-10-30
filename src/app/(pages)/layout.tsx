"use client";

import { QueryClient, QueryClientProvider } from "react-query";

import { Header } from "@/shared/components/header/header";
import { Popup } from "@/shared/components/popup";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>{children}</main>

      <Popup />
    </QueryClientProvider>
  );
}
