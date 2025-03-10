
import { PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
