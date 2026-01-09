"use client";
import { LanguageProvider } from "@/context/LanguageContext";
import DashboardSidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/Header";
 

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
  <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
    <DashboardSidebar />
    <div className="flex-1 flex flex-col">
      <DashboardHeader />
      <main className="p-6">{children}</main>
    </div>
  </div>
</LanguageProvider>
  );
}
